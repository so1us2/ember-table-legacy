import Ember from 'ember';
import StyleBindingsMixin from 'ember-table-legacy/mixins/style-bindings';
import RegisterTableComponentMixin from 'ember-table-legacy/mixins/register-table-component';

export default Ember.View.extend(
StyleBindingsMixin, RegisterTableComponentMixin, {
  classNames: ['ember-table-scroll-panel'],
  styleBindings: ['width', 'height'],
  width: Ember.computed.alias('tableComponent._tableColumnsWidth'),
  height: Ember.computed.alias('tableComponent._tableContentHeight')
});
