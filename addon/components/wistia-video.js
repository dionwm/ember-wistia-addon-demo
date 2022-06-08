import Component from '@ember/component';
import layout from '../templates/components/wistia-video';

export default Component.extend({
  layout,
  matcher: null,
  classNames: ['video-wrapper'],

  wistia: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let wistia = Ember.get(this, 'wistia')
    let matcher = Ember.get(this, 'matcher')
    wistia.addVideo(matcher)
  }
});
