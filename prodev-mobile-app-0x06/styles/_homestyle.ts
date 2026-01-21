import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333',
  },
  searchControl: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#34967C',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  filterContainer: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  showMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export { styles }
