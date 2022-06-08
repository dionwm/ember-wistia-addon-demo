import Service from '@ember/service';

export default Service.extend({
    addVideo(matcher) {
        window._wq = window._wq || []

        window._wq.push({
            [matcher]: (video) => {
                video.bind('play', () => {
                    console.log('Video is Playing')
                })
            }
        })
    }
});
