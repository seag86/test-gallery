import { StyleSheet, Dimensions, Platform, TextStyle } from 'react-native'
import { color, spacing } from '.'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'


export const style = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colVCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colHCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowVCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  /* Operation Layout */
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: '90deg' }],
  },
  rotate90Inverse: {
    transform: [{ rotate: '-90deg' }],
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh15: {
    marginHorizontal: 15,
  },
  mh20: {
    marginHorizontal: 20,
  },
  mh24: {
    marginHorizontal: 24,
  },
  mh30: {
    marginHorizontal: 30,
  },
  mh40: {
    marginHorizontal: 40,
  },
  mh48: {
    marginHorizontal: 48,
  },
  mt3: {
    marginTop: 3,
  },
  mt5: {
    marginTop: 5,
  },
  mt8: {
    marginTop: 8,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },
  mb3: {
    marginBottom: 3,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },
  mb60: {
    marginBottom: 60,
  },
  mr5: {
    marginRight: 5,
  },
  mr8: {
    marginRight: 8,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr18: {
    marginRight: 18,
  },
  mr20: {
    marginRight: 20,
  },
  mr24: {
    marginRight: 24,
  },
  ml3: {
    marginLeft: 3,
  },
  ml5: {
    marginLeft: 5,
  },
  mr50: {
    marginRight: 50,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  ml30: {
    marginLeft: 30,
  },
  ml50: {
    marginLeft: 50,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv20: {
    paddingVertical: 20,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb25: {
    paddingBottom: 25,
  },
  ph5: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  ph8: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  ph10: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  ph15: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  ph20: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  ph50: {
    paddingRight: 50,
    paddingLeft: 50,
  },
  pr0: {
    paddingRight: 0,
  },
  pr10: {
    paddingRight: 10
  },
  pl8: {
    paddingLeft: 8
  },
  pl15: {
    paddingLeft: 15
  },
  pt10: {
    paddingTop: 10
  },
  pt15: {
    paddingTop: 15
  },
  pt20: {
    paddingTop: 20
  },
  searchImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: color.primary
  },
  previewImg: {
    width: width-2*spacing[4],
    height: width * 9 / 16,
    resizeMode: 'cover'
  },
  previewBtn: {
    width: width-2*spacing[4],
    height: width * 9 / 16,
    backgroundColor: '#ccc'
  },
  longBtn: {
    height: 50,
  },
  detailTeg: {
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tinput: {
    borderColor: color.lightGrey,
    borderWidth: 1,
  },
  tag: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  }

})

