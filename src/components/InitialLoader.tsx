import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 15) return 'Initializing vegan cooking platform...';
    if (progress < 30) return 'Preloading culinary video content...';
    if (progress < 50) return 'Loading interactive recipe demonstrations...';
    if (progress < 65) return 'Preparing plant-based cooking tools...';
    if (progress < 80) return 'Setting up your vegan culinary workspace...';
    if (progress < 95) return 'Almost ready to start your vegan cooking journey...';
    return 'Welcome to your vegan cooking education platform!';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>VEGAN COOKING COURSES</Logo>
        <Tagline>Master the Art of Plant-Based Cuisine</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;