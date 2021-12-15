<template>
    <nav align="center">
        <ul>
            <li><router-link to="/" class="travelLink" :key="$route.fullPath">Home</router-link></li>
            <li><router-link to="/viaje/brc" class="travelLink" :key="$route.fullPath">Bariloche</router-link></li>
            <li><router-link to="/viaje/eeuu" class="travelLink" :key="$route.fullPath">Estados Unidos</router-link></li>
            <li><router-link to="/viaje/otros" class="travelLink" :key="$route.fullPath">Otros...</router-link></li>
            
        </ul>
    </nav>
    <div align="center">
        <button><router-link to="/" class="travelLink">Volver</router-link></button>
    </div>
</template>

<script>
    export default {
        name: 'Vue'
    }
</script>

<style scoped>
    ul {
        display: inline-flex;
        padding: 1.5rem;
    }
    li {
        margin: 1rem;
        list-style: none;
    }
    a {
        text-decoration: none;
        border-bottom: 0;
    }
    @media screen and (max-width: 480px) {

		nav {
			display: none;
		}
        button {
            margin-top: 2rem;
        }

	}
    @media screen and (min-width: 480px) {

		button {
			display: none;
		}

	}
    .router-link-active{
        border-bottom: dotted 1px rgba(255, 255, 255, 0.5);
    }
</style>