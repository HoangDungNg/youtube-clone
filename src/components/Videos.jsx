import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  //console.log(videos);
  if (!videos?.length) return 'Loading...';

  return (
    <Stack
      direction={{ xs: 'row', md: direction }}
      flexWrap="wrap"
      gap={2}
      sx={{ justifyContent: { xs: 'center', md: 'start' } }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {(item?.id?.videoId || item?.id?.playlistId) && (
            <VideoCard video={item} />
          )}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
