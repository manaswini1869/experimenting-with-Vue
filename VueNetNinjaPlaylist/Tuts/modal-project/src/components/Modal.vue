<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale : theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: ['theme'],
  methods: {
    closeModal() {
        this.$emit('close')
    }
  }
}
</script>


<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
        color: #333;
    }
    .modal .actions a {
        text-decoration: none;
        color: #03cfb4;
        padding: 10px 20px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #03cfb4;
        margin: 0 10px;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
    .modal.sale .actions {
        color: white;
    }
    .modal.sale .actions a {
        color: black;
    }
</style>