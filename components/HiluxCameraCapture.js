import React from 'react';
import { View, TouchableOpacity,PermissionsAndroid, StyleSheet, Dimensions} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

const RNFS = require('react-native-fs');

export const dirHome = `${RNFS.ExternalStorageDirectoryPath}/NavShell`
export const dirPicutures = `${dirHome}/Pictures`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  flipButton: {
    flex: 1,
    marginTop: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
  recordingButton: {
    marginBottom: 10,
  },
});

class HiluxCameraCapture extends React.PureComponent {
  state = {
    type: RNCamera.Constants.Type.front,
  };

  flipCamera = () =>
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });

  takePhoto = async () => {
    const options = { quality: 0.5, base64: true };
    await this.camera.takePictureAsync(options).then( data => {
        //console.log("pic await path ", data )
        this.saveImage(data.uri).catch(err => {            
            console.error('capture pic error :' ,err)

        })
    }) ;
    
    //  eslint-disable-next-line
    //console.log(data.uri);

  };
  render() {
    const { type } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          type={type}
          style={styles.preview}
        />
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={this.flipCamera} style={styles.flipButton}>
            <Icon name="refresh" size={35} color="orange" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={this.takePhoto} style={styles.recordingButton}>
            <Icon name="camera" size={50} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  async getExtStoragePermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "Hilux needs to save your data locally"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert("Permission granted","Local Save Permitted");
      } else {
        alert(
          "Permission Denied!",
          "Cannot save data locally"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }

  //move the user's pic to app folder
   moveAttachment = async (filePath, newFilepath) => {
    
    return new Promise((resolve, reject) => {
        console.log('pic dir: ', dirPicutures, " fp ", filePath, "newPath:", newFilepath);

        CameraRoll.saveToCameraRoll(filePath, 'photo');
        RNFS.mkdir(dirPicutures)
        .then(() => {
          RNFS.moveFile(filePath, newFilepath)
            .then( () => {
              console.log('FILE MOVED', filePath, newFilepath);
              resolve(true);
            })
            .catch(error => {
              console.log('moveFile error', error);
              reject(error);
            });
        }) 
        .catch(err => {
          console.log('mkdir error', err);
          reject(err);
        });
    
    
    });
  };

  saveImage = async filePath => {
    try {
      // set new image name and filepath
      console.log('saveImage path: ', filePath);
      const newImageName = `hiluxcap.jpg`;
      const newFilepath = `${dirPicutures}/${newImageName}`;
      // move and save image to new filepath
      const imageMoved = await this.moveAttachment(filePath, newFilepath);


      console.log('image moved', imageMoved);

    } catch (error) {
      console.log('saveimage', error);
    }
  };

}

export default HiluxCameraCapture;