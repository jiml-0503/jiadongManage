<template>
    <div v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
            <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                    <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
                </el-menu-item>
            </app-link>

        </template>
    </div>
</template>
<script>
import path from 'path'
import Item from './Item'
import AppLink from './Link'
import { isExternal } from '@/utils/validate'
export default {
    name: 'SidebarItem',
    components: { Item,AppLink },
    props: {
        item: {
            type: Object,
            required: true//使用required选项来声明这个参数是否必须传入。
        },
        basePath: {
            type: String,
            default: ''//使用default选项来指定当父组件未传入参数时props变量的默认值：
        },
        isNest: {
            type: Boolean,
            default: false
        },
    },
    data() {
        this.onlyOneChild = null
        return {
            
        }
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                } else {
                    //临时设置（如果只有一个显示子级，将使用）
                    this.onlyOneChild = item
                    return true
                }
            })

            // 当只有一个子路由时，默认显示子路由
            if (showingChildren.length === 1) {
                return true
            }

            // 如果没有要显示的子路由，则显示父路由
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                return true
            }

            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>