import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface LearningCardProps {
    title: string;
    icon: 'users' | 'heart' | 'message-circle' | 'star';
    color: string;
    onPress: () => void;
}

const LearningCard: React.FC<LearningCardProps> = ({ title, icon, color, onPress }) => {
    const scaleAnim = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
        >
            <Animated.View
                style={[
                    styles.card,
                    {
                        backgroundColor: color,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <View style={styles.iconContainer}>
                    <Feather name={icon} size={40} color="#FFFFFF" />
                </View>
                <Text style={styles.cardTitle}>{title}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
});

export default LearningCard;
