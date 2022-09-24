const styles = {
  container: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 10,
    background: 'white',
    // #E20880 pink
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '120px',
    justifyContent: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
  },
  header: {
    marginBottom: 2,
    marginLeft: 1,
    marginTop: 1,
  },
  uploadIcon: {
    position: 'absolute',
    top: '-17px',
    left: '55%',
  },
  detailsContainer: {
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 1,
  },
  detailsHeader: {
    fontSize: 16,
    marginBottom: 1,
    color: '#E20880',
    fontFamily: 'Strawford','Manrope':'sans-serif',
  },
  detailsCard: {
    marginBottom: 2,
  },
  backButtonHolder: {
    color: 'rgb(226,8,128)',
    '&:hover': {
      color: 'rgba(53.0,197.0,243.0,1.0)',
    },
  },
  backButton: {
    color: 'inherit',
  },
  label: {
    color: 'rgba(53.0,197.0,243.0,1.0)',
    fontSize: 13,
    fontFamily: 'Strawford','Manrope':'sans-serif',
  },
  value: {
    color: 'black',
    fontSize: 14,
    marginRight: 2,
    minWidth: 200,
    fontFamily: 'Strawford','Manrope':'sans-serif',
  },
  copyIcon: {
    color: 'rgb(226,8,128)',
    fontSize: 14,
    marginTop: -0.5,
  },
};

export default styles;
