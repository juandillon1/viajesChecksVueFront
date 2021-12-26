<template>
<!-- The Modal -->
<div id="myModal" class="modal animate__animated animate__fadeIn">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Se necesita contraseña ver todos los viajes</h2>
    </div>
    <div class="modal-body">
      <form v-on:submit.prevent="comprobarPass">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="pass" placeholder="Ingrese la contraseña">
            </div>
            <button type="submit" class="btn btn-success">Comprobar</button>
        </form>
    </div>
    <div class="modal-footer">
      <h3>Sin la contraseña no se pueden ver algunos viajes</h3>
    </div>
  </div>

</div>
</template>

<script>
    import Swal from 'sweetalert2'
    export default {
        name: 'Modal',
        data(){
            return {
                pass: '',
                lastRoute: localStorage.getItem('lastRoute'),
                mostrarModal: false
            }
        },
        mounted() {
            if(this.lastRoute) {
                this.mostrarModal = true
            }
            var modal = document.getElementById("myModal");
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            if(this.mostrarModal) {
                modal.style.display = "block";
            } else {
                modal.style.display = "none";
            }
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        },
        methods: {
            comprobarPass() {
                if(this.pass == 123321) {
                    localStorage.removeItem('lastRoute')
                    localStorage.setItem('at', true)
                    setTimeout(() => {
                        localStorage.removeItem('at')
                    }, 60000*60);
                    this.$router.replace(this.lastRoute)
                } else {
                    localStorage.setItem('at', false)
                    Swal.fire({
                        title: 'Contraseña incorrecta!',
                        text: `Verifique y vuelva a intentarlo`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 4; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
    }
    @media screen and (max-width: 480px) {

		h2 {
            font-size: 10px;
        }
        .close {
            margin-right: 1rem;
        }

	}

    /* Modal Content */
    .modal-content {
        position: relative;
        background-color: transparent;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s
    }

    /* Add Animation */
    @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
    }

    @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
    }

    /* The Close Button */
    .close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    }

    .close:hover,
    .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    }

    .modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
    }

    .modal-body {padding: 2px 16px;}

    .modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
    }
</style>