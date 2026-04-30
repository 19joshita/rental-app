import { StyleSheet, Platform } from 'react-native';
export const registerStyle = StyleSheet.create({
    container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    color: '#111827',
  },
  paraContainer: {
    alignItems: 'center',
    marginTop: 4,
  },
  paragraph: {
    width: '75%',
    textAlign: 'center',
    color: '#6B7280',
    fontWeight: 400,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginBottom: 6,
  },
  input: {
    padding: 14,
    width: '100%',
    borderRadius: 32,
    color: 'black',
    backgroundColor: '#EEF0F2',
  },
  error: {
    fontSize: 14,
    color: '#ff3b30',
    margin: 4,
  },
  passwordView: {
    paddingVertical: Platform.OS === 'ios' ? 14 : 4,
    paddingHorizontal: 12,
    width: '100%',
    borderRadius: 32,
    backgroundColor: '#EEF0F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
  },
  termContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotText: {
    fontSize: 14,
    color: '#CE1E1E',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D254',
  },
  checkboxIcon: { color: '#fff', fontSize: 14 },
  actions: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#111827',
    padding: 14,
    width: '100%',
    borderRadius: 32,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  account: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 5,
  },
  accountText: {
    color: '#6B7280',
    fontWeight: 400,
  },
  login: {
    color: '#111827',
    fontWeight: 600,
  },
});