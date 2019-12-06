import axios from 'axios';
import { combineResolvers } from 'graphql-resolvers';
import { Radio } from '../../../services';
import { extractYoutubeVideoID, formatObject, isAdmin } from '../../libs';

module.exports = {
  Mutation: {
    create_blog_radio_temp: combineResolvers(
      isAdmin,
      async (_, { videoURL }, { currentUser }) => {
        const videoId = extractYoutubeVideoID(videoURL);
        const getData = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos?part=id%2C+contentDetails%2C+snippet&id=' +
            videoId +
            '&key=AIzaSyBJsZJqSOL5xkTam9lzE5Au-1gmlaL2t1g'
        );
        const snippetData = getData.data.items[0].snippet;
        const contentDetails = getData.data.items[0].contentDetails;

        const duration = contentDetails.duration;
        const description = snippetData.description;
        const formattedTime = duration
          .replace('PT', '')
          .replace('H', ':')
          .replace('M', ':')
          .replace('S', '');
        const title = snippetData.title;
        const smallThumbnail = snippetData.thumbnails.default.url;
        const largeThumbnail = snippetData.thumbnails.maxres.url;

        const blogradioData = formatObject({
          title,
          description,
          length: formattedTime,
          small_thumbnail: smallThumbnail,
          large_thumbnail: largeThumbnail,
          author_id: currentUser.id,
          video_url: videoURL
        });

        const blogRadio = new Radio(blogradioData);

        await blogRadio.save();
        return blogRadio;
      }
    ),
    delete_blog_radio_temp: combineResolvers(isAdmin, async (_, { id }) => {
      const radio = await Radio.findOne({ id });
      radio.remove();
      return radio;
    }),
    create_blog_radio: combineResolvers(
      isAdmin,
      async (
        _,
        {
          id,
          title,
          content,
          hastags,
          description,
          smallThumbnail,
          largeThumbnail,
          length
        },
        { currentUser }
      ) => {
        let radio = await Radio.findOne({ id });

        const blogradioData = formatObject({
          title,
          description,
          length,
          small_thumbnail: smallThumbnail,
          large_thumbnail: largeThumbnail,
          author_id: currentUser.id,
          content,
          hastags,
          is_published: true
        });

        if (!radio) {
          radio = new Radio(blogradioData);
        } else {
          radio.updateDoc(blogradioData);
        }

        await radio.save();
        return radio;
      }
    )
  }
};
