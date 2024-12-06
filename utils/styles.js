// styles.js
import { StyleSheet } from 'react-native';
import { fonts } from '@/utils/fonts';
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A2B4C',
  },
  container: {
    flex: 1,
    padding: 0,
    paddingLeft: 10,
  },
  submenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginTop: 0,
    borderRadius: 20,
  },
  submenuText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.Poppins,
    marginBottom: 5,
  },
  gameCardContainer: {
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 120,
    height: 120,
    overflow: 'hidden',
  },
  gameImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(0, 78, 112, 0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  modalImage: {
    width: 130,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: fonts.Poppins,
    marginBottom: 10,
  },
  howToPlayContainer: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  howToPlayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E6F7FF',
    fontFamily: fonts.Poppins,
    marginBottom: -15,
  },
  howToPlayText: {
    fontSize: 12,
    color: '#E6F7FF',
    fontFamily: fonts.Poppins,
    lineHeight: 20,
  },
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    width: '97%',
    padding: 6,
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  playButton: {
    backgroundColor: '#20B954',
  },
  closeButton: {
    backgroundColor: '#FF5C5C',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: fonts.Poppins,
  },
  banner: {
    position: 'absolute',
    bottom: 2,
    left: 10,
    right: 10,
    backgroundColor: '#002f53',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    marginRight: 16,
  },
  bannerText: {
    color: '#00c9ff',
    fontWeight: 'bold',
  },
  bannerDescription: {
    color: '#D0E7FF',
    fontSize: 12,
  },
});

export default styles;
