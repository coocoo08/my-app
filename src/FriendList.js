import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import Margin from "./Margin";

export default (props) => {
    /*
        Case 1. 삼항연산자
    */
    // return props.isOpened ? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
    //         {props.data.map((item, index) => (
    //             <View key = {index}>
    //                 <Profile
    //                     uri = {item.uri}
    //                     name = {item.name}
    //                     introduction = {item.introduction}
    //                 />
    //                 <Margin height={13} />
    //             </View>
    //         ))}
    //     </ScrollView>
    // ) : null;

    /*
        Case 2. if문으로 먼저 예외처리
    */
//    if (!props.isOpened) return null;
//    return props.isOpened ? (
//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
//             {props.data.map((item, index) => (
//                 <View key = {index}>
//                     <Profile
//                         uri = {item.uri}
//                         name = {item.name}
//                          introduction = {item.introduction}
//                     />
//                     <Margin height={13} />
//                 </View>
//             ))}
//          </ScrollView>
//     ) : null;
    /*
        Case 3. && 이용
    */
    return props.isOpened && (
        <ScrollView showsVerticalScrollIndicator={false}>
            {props.data.map((item, index) => (
                <View key = {index}>
                    <Profile
                        uri = {item.uri}
                        name = {item.name}
                         introduction = {item.introduction}
                    />
                    <Margin height={13} />
                </View>
            ))}
         </ScrollView>
    );
}