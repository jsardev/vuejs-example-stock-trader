export default {
  attachKeyboardShortcuts: vm => {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'p':
          vm.$router.push('/portfolio');
          event.preventDefault();
          break;
        case 's':
          vm.$router.push('/stocks');
          event.preventDefault();
          break;
        case 'd':
          vm.$store.dispatch('app/endday');
          event.preventDefault();
          break;
      }
    });
  }
};
