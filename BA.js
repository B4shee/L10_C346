import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image, Button } from 'react-native'; // 1. Import Button
import { Ionicons } from '@expo/vector-icons';

const datasource = [
    {
        data: [
            { name: 'Ayane', card: 'https://static.wikitide.net/bluearchivewiki/a/a7/Ayane.png?version=3047467dc2cc72b22bd20c0f1b4cb66f' },
            { name: 'Serika', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DAy2CEtTPybOWCRsnJ2n1wVnYuJemuSlWLT6JT4VdA&s=10' },
            { name: 'Nonomi', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZmFMQ99X7ogoiRxwwElpghn9suGHqJaIOPmPjvbVpQ&s=10' },
            { name: 'Shiroko', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-D8xBLdNCJDIv9siW-UTDqzdu4C3X-uHVEriJw_-1g&s=10' },
            { name: 'Hoshino', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwA9pad3IIy8v43mSZDKT69V88AGmpANT7d5OsaqfouA&s' },
        ],
        title: 'Abydos',
        bgColor: 'turquoise',
        icon: ''
    },
    {
        data: [
            { name: 'Yuuka', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiVKrlyMnahVFKRFzEdZTtMHbyoKdqxLrsvKzOcodgg&s=10' },
            { name: 'Noa', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshdlmvBtz3H67IUiWXdBvbPEZ2388EInRLnYxxzdmew&s=10' },
            { name: 'Rio', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDUKIPH2tnMof4NoPbkFjAYTb6c3PbffyjeRTXgNhvw&s=10' },
            { name: 'Koyuki', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpBZllJcfv6pgE9rQiWyoUjsKYaudvPX1oTkIMu77GQ&s=10' },
        ],
        title: 'Millennium',
        bgColor: 'blue',
        icon: ''
    },
    {
        data: [
            { name: 'Hina', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLxl95yX5WlLp_PavVHhP50Yzri5zCYcioCQIJZ035A&s=10' },
            { name: 'Ako', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdeQ7czGSnTG1o2vngICZBhSUMC22YdW0CKd1hvBw6Q&s=10' },
            { name: 'Chinatsu', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStrB217Pt9MoUcPHwoGU_q_qUBJ112_244AFLNJzXNQ&s=10' },
            { name: 'Iori', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4cT3oUVnP5b6qG2S17RokatdrXyFoxLaWEBU-QBUAQ&s=10' },
        ],
        title: 'Gehenna',
        bgColor: 'red',
        icon: ''
    },
    {
        data: [
            { name: 'Hifumi', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rdm3gIcrKQ9SW7w4gPP27rweAg9uIudtD-JlyQKcJQ&s=10' },
            { name: 'Azusa', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gHcqVJ2dWE7ntxnbvSPjk6y7m6OvnvGwRa1bgFI7HA&s=10' },
            { name: 'Hanako', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSWvakgJgvqN7T-S1Afq8mPeh-STPpyGp9uucGYMnwg&s=10' },
            { name: 'Koharu', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV70U9j0igRjrrZijKm_lyFv1AXaZb_V2r4YG74D4zkw&s=10' },

        ],
        title: 'Trinity',
        bgColor: 'yellow',
        icon: ''
    },
    {
        data: [
            { name: 'Yukari', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgMDXEFw8F96m4MacaNqYtYZump-IDqWwhRDZrmFmIw&s=10' },
            { name: 'Kikyou', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPnmTzponwc4_lEZ8yERX2pO2qY53OvFNGBHS-SZI5Q&s=10' },
            { name: 'Renge', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9BvKx4bzP_Gwof7y_MDj6T_10xsul3jOxBqQXYEsDA&s' },
            { name: 'Nagusa', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBHTQPuhP_UQZ0lC-9GgwHjxdmcgi2u1i68okHiYj6g&s=10' },

        ],
        title: 'Hyakkiyako',
        bgColor: 'pink',
        icon: ''
    },
    {
        data: [
            { name: 'Kisaki', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQelCF8xCqIzgPrXkF_QfBMkCnwMFv8zFfh_TDl6prg&s=10' },
            { name: 'Mina', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTox6sqgOpi1lhu53_vq0lGV5dyMV9fa_1e3mWhXLd6g&s=10' },
            { name: 'Rumi', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F0fKUYmPAisC6re0Td0zLtXbOkf3fJ5QV6ftMzhO2A&s=10' },
            { name: 'Reijo', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXSGl8_lu7RKGucaPLRRm31pIjm54-q9geBkqTC2jfw&s=10' },

        ],
        title: 'Shanhaijing',
        bgColor: 'green',
        icon: ''
    },
    {
        data: [
            { name: 'Cherino', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwi9Q84bA8krBThuCjeUxoIEbrA5vWt1GO2JDyzY4iQ&s=10' },
            { name: 'Tomoe', card: 'https://static.wikitide.net/bluearchivewiki/0/0a/Tomoe.png?version=d5dbbb140c7cfee0e2c69f571f0ad275' },
            { name: 'Marina', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJRbBPGXiA-4n2HJF4jWjXCP1twS-JcUySvDpTxGddw&s=10' },
            { name: 'Minori', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f68pSfjZ1haYGYfABRmwpbdETAJrCO09qg4e1Yz6nQ&s' },

        ],
        title: 'Red Winter',
        bgColor: 'maroon',
        icon: ''
    },
    {
        data: [
            { name: 'Kanna', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvy0prw8sKtx60Jncuo8PvCd3GmLLuqqRAmVlC02kJA&s=10' },
            { name: 'Konoka', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBngAwE8bSWjhX99RU1l3NP4sO8_Tg-4yMjTRNmB7suA&s=10' },
            { name: 'Kirino', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlSPIkpUoCpOu0zCWdacfP27-fbLzKEj0kpKN6AlxRA&s=10' },
            { name: 'Fubuki', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbzHD8uBDPED1U3TsWyP-dv8aQOHYMfB8v_zrTHVIHA&s=10' },

        ],
        title: 'Valkryie',
        bgColor: 'purple',
        icon: ''
    },
    {
        data: [
            { name: 'Miyako', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSjRHNQfSd1mMbS4dIxno8yVYuKeqTWqs1X2RKdNAw&s=10' },
            { name: 'Saki', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xNVoziklsSnGOvlyWefcDUzcxI0LcbIdbpvVdFH2hQ&s=10' },
            { name: 'Moe', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nnjjC9bx6vlwVtK0wsfRX1eU59sgupltjssSWfK4bw&s=10' },
            { name: 'Miyu', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf--MWkMqbSJKoKrLwVb5D2P8UuTk1whlB3idygDVAEQ&s=10' },

        ],
        title: 'SRT',
        bgColor: 'lime',
        icon: ''
    },
    {
        data: [
            { name: 'Saori', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7duXMaHp15H9zGEPlfzgnaVFdfkVqeG4IOypLP-nS2A&s=10' },
            { name: 'Atsuko', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7T0LZ0fZQkPw64pviOuAUZgae-XiGzUTpMQ_v2Ur0A&s=10' },
            { name: 'Misaki', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6ku-PldmQASbtSITRydW-zYuiTRJuz9jJ6i468u6XA&s=10' },
            { name: 'Hiyori', card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQF3dpvjT2qkHAJXmwMjO-00G7AlsX52WnmFH9IP-2w&s=10' },

        ],
        title: 'Arius',
        bgColor: '#00008B',
        icon: ''
    },
];

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                Alert.alert(item.name + ' is selected!');
            }}
        >
            <Text style={styles.textStyle}>{item.name}</Text>
            <View style={styles.middleColumn} />
            {item.card ? (
                <Image style={styles.image} source={{ uri: item.card }} resizeMode="contain" />
            ) : null}
        </TouchableOpacity>
    );
};

export default function Exercise2() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 10 }}>Blue Archive App</Text>

            {/* 2. Add the blue bar button above SectionList */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Add Student"
                    color="grey"
                    onPress={() => Alert.alert('Add Student pressed!')}
                />
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Ionicons name={icon} size={22} color="black" style={styles.headerIcon} />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
        marginBottom: 40,
        marginHorizontal: 20,
        paddingTop: 30,
    },
    buttonContainer: {
        marginBottom: 10,
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
        borderRadius: 4,
        padding: 10,
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'left',
    },
    middleColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    image: {
        width: 100,
        height: 140,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 8,
        borderRadius: 4,
    },
    headerIcon: {
        marginRight: 8,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});