import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image, Button } from 'react-native'; // 1. Import Button
import { Ionicons } from '@expo/vector-icons';

const datasource = [
    {
        data: [
            { name: 'Golbat', card: 'https://images.pokemontcg.io/sv4/111_hires.png' },
            { name: 'Weezing', card: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_110.png' },
        ],
        title: 'Dark',
        bgColor: 'grey',
        icon: 'moon'
    },
    {
        data: [
            { name: 'Gengar', card: 'https://th.bing.com/th/id/OIP.zi49z07RddInYzasrr4IlQHaKW?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
            { name: 'Mewtwo', card: 'https://images.pokemontcg.io/sv3pt5/150_hires.png' },
        ],
        title: 'psychic',
        bgColor: 'violet',
        icon: 'eye'
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
            <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 10 }}>L10 Pokemon</Text>

            {/* 2. Add the blue bar button above SectionList */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Add Pokemon"
                    color="blue"
                    onPress={() => Alert.alert('Add Pokemon pressed!')}
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
        fontSize: 15,
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
        width: 300,
        height: 340,
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