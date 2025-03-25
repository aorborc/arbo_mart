import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const SLIDE_WIDTH = width - 32; // Full width with padding
const SLIDE_HEIGHT = 200; // Fixed height for media content

const MediaSlider = ({ mediaItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState({});
  const [videoError, setVideoError] = useState({});

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / SLIDE_WIDTH);
    setCurrentIndex(index);
  };

  const renderMediaItem = (item, index) => {
    const handleLoadStart = () => {
      setLoading(prev => ({ ...prev, [index]: true }));
    };

    const handleLoadEnd = () => {
      setLoading(prev => ({ ...prev, [index]: false }));
    };

    const handleVideoError = (error) => {
      console.warn('Video loading error:', error);
      setVideoError(prev => ({ ...prev, [index]: true }));
      setLoading(prev => ({ ...prev, [index]: false }));
    };

    switch (item.type) {
      case 'image':
        return (
          <View style={styles.mediaWrapper}>
            <Image
              source={item.source}
              style={styles.mediaContent}
              resizeMode="cover"
              onLoadStart={() => handleLoadStart()}
              onLoadEnd={() => handleLoadEnd()}
              onError={() => handleLoadEnd()}
            />
            {loading[index] && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
          </View>
        );
      case 'gif':
        return (
          <Image
            source={item.source}
            style={styles.mediaContent}
            resizeMode="cover"
          />
        );
      case 'video':
        if (videoError[index]) {
          return (
            <View style={[styles.mediaContent, styles.errorContainer]}>
              <Text style={styles.errorText}>Unable to load video</Text>
            </View>
          );
        }
        return (
          <View style={styles.videoContainer}>
            <Video
              source={item.source}
              style={styles.mediaContent}
              resizeMode="cover"
              repeat={true}
              muted={true}
              paused={currentIndex !== index}
              onLoadStart={handleLoadStart}
              onLoad={handleLoadEnd}
              onError={handleVideoError}
              playInBackground={false}
              ignoreSilentSwitch="ignore"
              controls={false}
              posterResizeMode="cover"
              useTextureView={false}
              bufferConfig={{
                minBufferMs: 15000,
                maxBufferMs: 50000,
                bufferForPlaybackMs: 2500,
                bufferForPlaybackAfterRebufferMs: 5000
              }}
            />
            <View style={styles.playButton}>
              <Image 
                source={{ uri: 'https://img.icons8.com/ios-filled/100/ffffff/play-button-circled.png' }}
                style={styles.playIcon}
              />
            </View>
            {loading[index] && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Media</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {mediaItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.slide}
            onPress={() => item.onPress && item.onPress()}
            activeOpacity={0.9}
          >
            {renderMediaItem(item, index)}
            {item.title && (
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.overlay}
              >
                <Text style={styles.slideTitle}>{item.title}</Text>
                {item.subtitle && (
                  <Text style={styles.slideSubtitle}>{item.subtitle}</Text>
                )}
              </LinearGradient>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {mediaItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#666',
  },
  scrollView: {
    marginBottom: 12,
  },
  slide: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  mediaWrapper: {
    flex: 1,
  },
  mediaContent: {
    width: '100%',
    height: '100%',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#666',
    fontSize: 14,
  },
  playButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 24,
    height: 24,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  slideSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#333',
    width: 24,
  },
});

export default MediaSlider; 