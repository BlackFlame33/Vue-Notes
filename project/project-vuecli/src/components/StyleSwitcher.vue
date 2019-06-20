<template>
  <div>
    <!-- Style switcher start -->
    <div class="style-switch-wrapper">
      <div class="style-switch-button">
        <i class="fa fa-sliders" />
      </div>
      <h3>Style Options</h3>
      <button
        id="preset1"
        class="btn btn-sm btn-primary"
      />
      <button
        id="preset2"
        class="btn btn-sm btn-primary"
      />
      <button
        id="preset3"
        class="btn btn-sm btn-primary"
      />
      <button
        id="preset4"
        class="btn btn-sm btn-primary"
      />
      <button
        id="preset5"
        class="btn btn-sm btn-primary"
      />
      <button
        id="preset6"
        class="btn btn-sm btn-primary"
      />
      <br>
      <br>
      <a class="btn btn-sm btn-primary close-styler pull-right">Close X</a>
    </div>
    <!-- Style switcher end -->
  </div>
</template>
<script>
export default {
  name: "StyleSwitcher"
};
</script>