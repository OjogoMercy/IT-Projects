import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, Pressable, TouchableOpacity ,StatusBar} from 'react-native';
import React from 'react';
import styles from '@/constants/Styles';
import images from '@/constants/images';
import { FontAwesome5, Feather, FontAwesome6, Ionicons,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  const iconFamilies: Record<string, any> = {
    FontAwesome5,
    Feather,
    FontAwesome6,
    Ionicons,
    MaterialCommunityIcons
  };

  const data = [
    { icon: 'person', text: 'Personal Data', iconFamily: 'Ionicons' },
    { icon: 'settings', text: 'Settings', iconFamily: 'Ionicons' },
    { icon: 'document-text', text: 'E-Statement', iconFamily: 'Ionicons' },
    { icon: 'heart', text: 'Referral Code', iconFamily: 'Ionicons' },
    { icon: 'dots-horizontal-circle', text: 'FAQ', iconFamily: 'MaterialCommunityIcons' },
    { icon: 'pencil-alt', text: 'Our Handbook', iconFamily: 'FontAwesome5' },
    { icon: 'account-group', text: 'Community', iconFamily: 'MaterialCommunityIcons' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent/>
      <View style={styles.row}>
        <Image source={images.profile} style={styles.profile} />
        <View style={{ width: '80%' }}>
          <Text style={styles.text}>Ojogo Mercy</Text>
          <Text style={[styles.text, { opacity: 0.5, fontSize: 12, marginTop: 5 }]}>
            Junior Mobile App Dev
          </Text>
        </View>
      </View>
      <View  style={{height: 2,width: '100%',backgroundColor: 'gray',opacity: 0.1,marginTop: 25,}} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item,index }) => {
          const Icon = iconFamilies[item.iconFamily];
          return (
            <>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.con} activeOpacity={0.5}>
                <Icon name={item.icon} size={22} color="black"/>
                </TouchableOpacity>
              <Text style={[styles.text, { marginLeft: 10,fontSize:14 }]}>{item.text}</Text>
            </View>
            <Pressable><AntDesign name="right" size={12} color={'black'}/></Pressable> 
            </View>
            {index === 3 && <View style={{height:2,backgroundColor:'gray',width:'100%',opacity:0.1,marginVertical:20}}/>}
            </>
          );
        }}
      />
      <View style={styles.box}>
        <AntDesign name='customerservice' size={30} color={'#5A5F90'}/>
        <Text style={{textAlign:'center',color:'#5A5F90',fontSize:12,fontWeight:'bold'}}>Feel Free to Ask, We're Ready To Help</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
