const ytdl = require('ytdl-core');

async function playMusic(videoId) {

    try {




        const videoInfo = await ytdl.getInfo(videoId);
        const audioFormat = ytdl.chooseFormat(videoInfo.formats, { filter: 'audioonly' });

        if (!audioFormat) {
            throw new Error('No audio format found for the video.');
        }

        return audioFormat.url;

    } catch (error) {
        console.error('Error fetching video URL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}

module.exports = {
    playMusic,
}