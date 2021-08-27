<template>
  <div>
    <h1>Experiments</h1>

    <Clickr />
    <button>does nothing</button>

    <hr />

    <Profile name="Groucho" bio="no goats no masters" pic="http://www.fillmurray.com/400/600" />
    <Profile name="Harpo" bio="no goats no masters" pic="http://www.fillmurray.com/401/600" />
    <Profile name="Chico" bio="no goats no masters" pic="http://www.fillmurray.com/400/601" />

    <hr />

    <Calculator />

  </div>
</template>

<script>
// @ is a shortcut for 'src'
import Clickr from '@/components/Clickr.vue';
import Profile from '@/components/Profile.vue';
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'Experiments',
  components: {
    Clickr,
    Profile,
    Calculator
  }
}
</script>
