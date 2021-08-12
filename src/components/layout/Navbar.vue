<template>
    <nav class="navbar is-success">
        <div class="nabvar-brand">
            <router-link to="/" class="navbar-item">
            <strong class='tag is-large'>Ganar CRM</strong>
            </router-link>
        </div>
    
        <div class='navbar-menu'>
            <div class="navbar-end">
                <router-link to="/dashboard/leads" class='navbar-item'>Leads</router-link>
                <router-link to="/dashboard/clients" class='navbar-item'>Clients</router-link>
                <router-link to="/dashboard/team" class="navbar-item">Team</router-link>
                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if='!$store.state.isAuthenticated'>
                            <router-link to="/signup" class="button is-success"><strong>Sign Up</strong></router-link>
                            <router-link to="/login" class="button is-light"><strong>Log In</strong></router-link>
                        </template>

                        <template v-else>
                            <router-link to='/dashboard/myaccount' class="button is-info">My account</router-link>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'Navbar'
}
</script>