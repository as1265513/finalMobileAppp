import React from 'react';

import {
  Animated,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

// constants
import {  COLORS, FONTS,  SIZES ,widthToDp,heightToDp,height,width } from "../../constants";





// Gallery View  Static Data 
const onBoardings = [
  { 
    title: 'Find a Resturant',
    description: 'Fastest operation to provide food \nby the fence.',
      img: require('../Assets/images/Burger.png')
  },
  {
    title: 'Pick The Food',
    description: 'Fastest operation to provide food \nby the fence.',
    img: require('../Assets/images/greenMarker.png')
  },
  {
    title: 'Get Fastest Delivery',
    description: 'Fastest operation to provide food \nby the fence.',
    img: require('../Assets/images/menu.png')
  }
  ,
  {
    title: 'Get Fastest Delivery',
    description: 'Fastest operation to provide food \nby the fence.',
    img: require('../Assets/images/Burger.png')
  }
];







// 






const GalleryView = ({navigation,route}) => {

  const [scrollToIndex, setScrollToIndex] = React.useState(0);

  const [completed, setCompleted] = React.useState(0);

 
  const [ref, setRef] = React.useState(null);
  const [RefOfImage, setRefOfImage] = React.useState(null);
  const [onBoardings, setOnBoardings] = React.useState([]);

  

    const scrollX = new Animated.Value(0);


    React.useEffect(()=>{
      setOnBoardings(route?.params?.data)
      
    },[])


    React.useEffect(() => {

     

        scrollX.addListener(({ value }) => {

       
          

            if(value>=0 && value<=width-1)
            {
              setScrollToIndex(0);
            }
            else if(value>=width && value<=(width*2))
            {
              setScrollToIndex(1);

            }
            else {
              setScrollToIndex(2)
            }
         
          
            if (Math.floor(value) == 2*SIZES.width) {
                setCompleted(true)
            }
        });

        return () => scrollX.removeListener();
    }, [scrollX]);
 
  

    // Render

    const scrollHandler = () => {
      console.log(onBoardings.length, scrollToIndex );
      if (onBoardings.length > scrollToIndex) {
        ref.scrollTo({
          x: (scrollToIndex + 1) * width,
          y: 0,
          animated: true,
        });
      } else {
        alert('Out of Max Index');
      }
    };



    function renderContent() {
        return (
            <Animated.ScrollView
            ref={ref=>setRef(ref)}
               horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                        onLayout={event => {
    const layout = event.nativeEvent.layout;
 
  }}
                    >
                        
                    
                        <View style={{ alignItems: 'center', }}>
                        <Image
                                source={item}
                                resizeMode="cover"
                                style={{  
                                    height:height-100,
                                    width:width-50,
                                }}
                          ref={ref=>setRefOfImage(ref)}
                            />
                        </View>


                  

                        
                        {/* Button */}
                          </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize,backgroundColor:'#F62E43' }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
       
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
           
                      
            
        </SafeAreaView>
    );
};



export default GalleryView;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
},
imageAndTextContainer: {
    width: SIZES.width,
    justifyContent:'center',
    // alignItems:'center',
 
    height:height/1.08
    
},
dotsRootContainer: {
  position:'absolute',
  bottom:heightToDp(2)
},
dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
 

},
dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.radius / 2
},
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  bottomLefthandIcon: {
    position: 'absolute',
    bottom: -45,
    left: -110,
    elevation: -2,
  },
  bottomRighthandIcon: {
    position: 'absolute',
    bottom: -25,
    right: -120,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  TopRightHand: {
    position: 'absolute',
    right: -18,
    top: -85,
  },
  TopLeftHand: {
    position: 'absolute',
    left: -80,
    top: -65,
    zIndex:10
  },
  FoodxaIcon: {
    opacity: 0.15,
    position: 'absolute',
    alignSelf: 'center',
    top: heightToDp(30),
  },
  AppIcon: {position: 'absolute', alignSelf: 'center', top: heightToDp(18)},
  pizza: {
    position: 'absolute',
    top: -80,
    right: -50,
    elevation: -1,
    opacity: 0.2,
  },
  burger: {
    position: 'absolute',
    top: -80,
    left: -50,
    elevation: -1,
    opacity: 0.2,
  },
  Juices: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    elevation: -1,
    opacity: 0.2,
  },
  BurgerBottom: {
    position: 'absolute',
    bottom: -20,
    right: -30,
    elevation: -1,
    opacity: 0.2,
    transform: [{rotate: '80deg'}],
  },
  btnCard: {
    width: 60,
    height: 60,
    borderRadius: 50,

    backgroundColor: 'orange',
    borderColor: 'orange',
    elevation:-1
  },
});
// shadowColor: "#orange",
//   shadowOffset: {
//     width: 0,
//     height: 2
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
