import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {LinearGradient} from 'expo-linear-gradient';

const Skeleton = (LinearGradient) => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
        </View>
        <View style={{width:300,height:200,borderRadius:4}}/>
      </View>
    </SkeletonPlaceholder> 
  );
};

export default Skeleton;