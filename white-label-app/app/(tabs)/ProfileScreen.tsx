import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ProfileScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <TouchableOpacity style={styles.profileSection}>
        <Image
          source={{
            uri: "https://via.placeholder.com/100x100.png?text=+",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.uploadText}>Tap to upload image</Text>
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter your username" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <TouchableOpacity>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} placeholder="Select date of birth" />
        </View>
      </TouchableOpacity>
     

      {/* Password Change Section */}
      <Text  style={styles.passwordChangeTitle}>
        PASSWORD CHANGE
      </Text>
      <Text style={styles.passwordChangeSubtitle}>
        Leave passwords empty if you don't want to change them.
      </Text>
     <View style={{marginBottom:10}}>
     <TextInput
        
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
     </View>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry={true}
      />
       <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#9E9E9E",
    position: "relative",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(20, 30, 50, 0.8)",
    textAlign: "center",
    marginVertical: 5,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  uploadText: {
    marginTop: 8,
    color: "rgba(20, 30, 50, 0.8)",
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  passwordChangeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(20, 30, 50, 0.8)",
    marginBottom: 5,
  },
  passwordChangeSubtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "rgba(20, 30, 50, 0.8)",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
