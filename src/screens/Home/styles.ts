import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  description: {
    color: "#2E9D4C",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 14,
    flex: 1,
    textAlignVertical: "center",
    marginTop: Platform.OS === "android" ? 0 : 150
  },
  content: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    marginTop: -42,
    paddingTop: 12
  },
  boxImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
  },
  items: {
    flex: 1,
    gap: 12
  },
  image: {
    // flex: 1,
    width: 400,
    height: 420,
  },
});