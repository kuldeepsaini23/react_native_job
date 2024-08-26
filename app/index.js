import { View, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
} from "../components";

const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("")

  return (

    // Navabr
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),

          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      {/* Main Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{flex:1, padding:SIZES.medium}}>
         {/* Bring Components */}
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={()=>{
              if(searchTerm){
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs/>
          <Nearbyjobs/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
