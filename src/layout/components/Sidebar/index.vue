<template>
    <el-menu
        :default-active="activeMenu"
        mode="vertical"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :collapse="isCollapse"
    >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
    components: {
        SidebarItem
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        routes(){
            return this.$router.options.routes
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        variables() {
            return variables
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    }
}
</script>