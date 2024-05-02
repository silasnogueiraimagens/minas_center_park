(function(){
    var script = {
 "start": "this.playAudioList([this.audio_31BC1287_3A78_DF8A_41A2_255ED48CFBE6]); this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -69.2,
  "class": "PanoramaCameraPosition",
  "pitch": -38.81
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -69.2,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 0.35
 },
 "id": "panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1500,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -38.81,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "initialPosition": {
  "yaw": -59.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1222B978_3A95_FEA7_41A4_8339997C5309",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "15",
 "id": "panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -19.09,
   "yaw": 167.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04"
  }
 ],
 "overlays": [
  "this.overlay_22C4E112_3AB5_AE68_41B5_935DE02C2770"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_t.jpg"
},
{
 "initialPosition": {
  "yaw": -73.47,
  "class": "PanoramaCameraPosition",
  "pitch": -27.55
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13EF1AC0_3A95_F3E8_41B8_58FAE4177EBA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "03",
 "id": "panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -64.24,
   "yaw": 34.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -64.24,
   "yaw": 92.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FF965F_3A68_C6BA_4164_427FB98D2699"
  },
  {
   "backwardYaw": 174.38,
   "yaw": 34.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3"
  },
  {
   "backwardYaw": -89.14,
   "yaw": 92.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30"
  }
 ],
 "overlays": [
  "this.overlay_2AF063C2_3A9C_D1EB_41B7_F587AF7B88C5",
  "this.overlay_2BE3F9D8_3A9D_51E7_41A1_292BC5959906",
  "this.overlay_2B745EC1_3A9C_B3E9_41B6_0B8ABEA7F826"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_31BC1287_3A78_DF8A_41A2_255ED48CFBE6.ogg",
  "mp3Url": "media/audio_31BC1287_3A78_DF8A_41A2_255ED48CFBE6.mp3",
  "class": "AudioResource"
 },
 "id": "audio_31BC1287_3A78_DF8A_41A2_255ED48CFBE6",
 "data": {
  "label": "musica"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "24",
 "id": "panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 65.58,
   "yaw": -111.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37"
  },
  {
   "backwardYaw": 122.8,
   "yaw": 65.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F"
  },
  {
   "backwardYaw": 127.31,
   "yaw": 149.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC"
  }
 ],
 "overlays": [
  "this.overlay_24B63690_3AB5_7268_41B4_91AD6CA4AF66",
  "this.overlay_254E0C64_3AB5_B6AF_41A0_17071B83107B",
  "this.overlay_1AAA8AE8_3AB4_B3B8_41B8_9D80BACF05C6"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 74.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D1CE783_3A95_F268_4197_6F825897C6AF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -122.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DE3D6F7_3A95_F3A9_41C4_8529481B0DA0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "27",
 "id": "panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -144.64,
   "yaw": -126.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC"
  }
 ],
 "overlays": [
  "this.overlay_1A005345_3A8F_D2E8_41CC_64C8821BA833"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "29",
 "id": "panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -105.25,
   "yaw": 51.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2"
  },
  {
   "backwardYaw": 92.66,
   "yaw": -89.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B"
  }
 ],
 "overlays": [
  "this.overlay_188020C5_3A8D_AFE8_418B_3B8B417DBBA0",
  "this.overlay_18DB486E_3A8D_7EB8_41B5_EC56552FEB94"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_t.jpg"
},
{
 "initialPosition": {
  "yaw": -92.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1210C997_3A95_FE68_41C8_60530D7F2523",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "08",
 "id": "panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 60.39,
   "yaw": -128.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E"
  },
  {
   "backwardYaw": -128.45,
   "yaw": -12.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C"
  },
  {
   "backwardYaw": 118.1,
   "yaw": -58.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883"
  },
  {
   "backwardYaw": -20.21,
   "yaw": 115.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3"
  }
 ],
 "overlays": [
  "this.overlay_29232A66_3A8B_72A8_41BC_6EFF4298118F",
  "this.overlay_2F6F55D7_3A8C_B1E9_418E_AC7B4E6EBBFD",
  "this.overlay_2FBDAF2E_3A8D_52BB_41BF_4078E1F99089",
  "this.overlay_2F015B4F_3A8D_B2F9_41A4_55DF6B5C02CF"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_t.jpg"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11",
 "id": "panorama_30BF57D6_3A68_C58A_41C3_E739DE539883",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -58.77,
   "yaw": 118.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24"
  },
  {
   "backwardYaw": 82.77,
   "yaw": -108.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B"
  },
  {
   "backwardYaw": 136.62,
   "yaw": -57.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C"
  },
  {
   "backwardYaw": -121.31,
   "yaw": 8.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04"
  }
 ],
 "overlays": [
  "this.overlay_2FCCA701_3A8D_5268_41C3_78CF4856C60E",
  "this.overlay_2DF3B83E_3A8D_7E98_41C7_F35A133B9649",
  "this.overlay_2C0286DE_3A8C_B398_41A1_1D6C39695226",
  "this.overlay_2C6C493D_3A8B_FE98_4186_3C55713F71D4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 167.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D9AC689_3A95_F278_4194_81C1B5E0227D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -64.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D8636A8_3A95_F3B8_4192_25AEB4551A9B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -128.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13B84A53_3A95_F2E9_4193_56EAEC0954A1",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "02",
 "id": "panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B"
  }
 ],
 "overlays": [
  "this.overlay_352B55E6_3A9C_B1A8_41B9_CE3585F1EFFD",
  "this.overlay_2AEDCCB2_3A9D_57AB_41C3_C46E6F9C9025"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_t.jpg"
},
{
 "initialPosition": {
  "yaw": -61.53,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D3FA745_3A95_F2E9_41B2_A59FB8C6E245",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 47.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_127D69D6_3A95_F1EB_41BA_9AD1A230EA4F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -145.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DF5B6D7_3A95_F3E8_41AE_A5C95083BB22",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06",
 "id": "panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -132.41,
   "yaw": 57.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3"
  }
 ],
 "overlays": [
  "this.overlay_2980C790_3A94_D268_41BE_D7DC4AF2F144"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_t.jpg"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10",
 "id": "panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -12.73,
   "yaw": -128.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24"
  }
 ],
 "overlays": [
  "this.overlay_2F99A603_3A8F_7268_41B9_E6C90D3E33CE"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_t.jpg"
},
{
 "initialPosition": {
  "yaw": -97.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13CD3ADF_3A95_F398_41C3_48852FBCA272",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -114.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D97D699_3A95_F399_41AC_14C1084414EE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 115.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12AF687D_3A95_FE98_41AF_CA9D8BE7453E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "25",
 "id": "panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 65.78,
   "yaw": 122.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58"
  }
 ],
 "overlays": [
  "this.overlay_25B2154C_3A8B_56FF_41C9_978EBC78EFA7"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_t.jpg"
},
{
 "initialPosition": {
  "yaw": 71.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12D78929_3A95_FEB8_41AC_7547141886C8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 51.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12D8190A_3A95_FE7B_41AB_1012CF74D74B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34565BB8_3A94_D198_41CB_5889FAA86000"
 ],
 "label": "01",
 "id": "panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_t.jpg",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -43.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C08260C_3A95_F278_4191_637270F7B197",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -104.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DD15716_3A95_F26B_41C5_4BEE11788B8E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "28",
 "id": "panorama_30B647BF_3A78_45FA_4185_BB01979A79E2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 51.08,
   "yaw": -105.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30"
  },
  {
   "backwardYaw": -56.55,
   "yaw": 73.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC"
  }
 ],
 "overlays": [
  "this.overlay_1BA428C3_3A8C_BFE9_4199_EFEE25965DF1",
  "this.overlay_1BFEAC95_3A8C_D669_41B6_BDDB96A95479"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "22",
 "id": "panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 15.75,
   "yaw": -157.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37"
  }
 ],
 "overlays": [
  "this.overlay_27D80686_3AB7_F268_418B_B9F2E20E666F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_t.jpg"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "17",
 "id": "panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 23.58,
   "yaw": 120.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F"
  }
 ],
 "overlays": [
  "this.overlay_20A5A93E_3ABF_5E98_41CB_5450BEE7ABFF"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_t.jpg"
},
{
 "initialPosition": {
  "yaw": -88.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12326968_3A95_FEB8_41C3_816A5BE22FD0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "19",
 "id": "panorama_30FA2E91_3A68_4786_4193_84ABE4F59994",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 97.97,
   "yaw": 107.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F"
  }
 ],
 "overlays": [
  "this.overlay_200197F9_3ABD_5198_41B3_6C763D60F049"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_t.jpg"
},
{
 "initialPosition": {
  "yaw": -119.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C50264B_3A95_F2F9_41CA_450190FCB43B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -5.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12FBE8CB_3A95_FFF8_41BC_50697D898B40",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "23",
 "id": "panorama_30A97B51_3A68_4E89_41CC_F10E3241620D",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 123.87,
   "yaw": -82.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37"
  }
 ],
 "overlays": [
  "this.overlay_2763BE28_3AB7_52B8_41A0_ECA4B1B5E9D2"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_t.jpg"
},
{
 "initialPosition": {
  "yaw": 122.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C61C63B_3A95_F298_41C4_6A4BC6FDC018",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -12.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13F1AAB0_3A95_F3A8_41B5_F5FFD5CF4968",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 115.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_129EE89C_3A95_FF98_41A5_5BD39243BCCA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "18",
 "id": "panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -166.41,
   "yaw": 91.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F"
  }
 ],
 "overlays": [
  "this.overlay_20CB8E0F_3ABF_5279_41A0_F304B9EF3D54"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_t.jpg"
},
{
 "initialPosition": {
  "yaw": 53.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13756B3D_3A95_F298_41C2_399B4106CC25",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -57.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D656800_3A95_FE68_41BD_5CEF27EC1590",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 160.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D42483F_3A95_FE99_41CB_0316C455EA5C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -72.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_120FA9B6_3A95_F1A8_41CA_B65B0C0AE25F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -59.69,
  "class": "PanoramaCameraPosition",
  "pitch": 21.12
 },
 "automaticZoomSpeed": 10,
 "id": "camera_128C68BC_3A95_FF9F_41C1_A2492D09BC2A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 25.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12C57948_3A95_FEF8_4193_7510B2FFFADD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 22.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C04261C_3A95_F29F_41C0_8E8D54FFC99C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 97.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C1D05FD_3A95_F199_419E_E8171584A022",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "21",
 "id": "panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -50.53,
   "yaw": 117.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37"
  }
 ],
 "overlays": [
  "this.overlay_27BF9486_3AB4_B668_41CC_DA21F9C76A8D"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_t.jpg"
},
{
 "initialPosition": {
  "yaw": 13.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_124ABA33_3A95_F2A8_41C9_583EB91525FB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "13",
 "id": "panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -57.42,
   "yaw": 136.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883"
  }
 ],
 "overlays": [
  "this.overlay_2C6FFEDB_3AB5_D398_41C1_1AAFDCD5C88B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "26",
 "id": "panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 73.53,
   "yaw": -56.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2"
  },
  {
   "backwardYaw": 149.03,
   "yaw": 127.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58"
  },
  {
   "backwardYaw": -126.14,
   "yaw": -144.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402"
  }
 ],
 "overlays": [
  "this.overlay_25C31721_3A8C_B2A8_41B1_AC047C8205E5",
  "this.overlay_251A8E62_3A8D_52A8_41A0_2D3930F6C16C",
  "this.overlay_25575BC5_3A8D_51E9_41C7_CABDBA578366"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_t.jpg"
},
{
 "initialPosition": {
  "yaw": -87.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D0B97A2_3A95_F1A8_41C8_30B8EA3371D3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -62.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C2455ED_3A95_F1B8_41C6_5F923A0DA715",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -59.69,
  "class": "PanoramaCameraPosition",
  "pitch": 21.12
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12B1F85E_3A95_FE98_41A5_B247F55BE2D7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 121.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13DE4AD0_3A95_F3E7_41CA_C77E4E7B600D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -114.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D6827E1_3A95_F1A8_419C_D34F060006F7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "12",
 "id": "panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -108.82,
   "yaw": 82.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883"
  }
 ],
 "overlays": [
  "this.overlay_2C2D62CD_3AB4_B3F9_41C9_FD78B95B9888"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_t.jpg"
},
{
 "initialPosition": {
  "yaw": -106.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1308CB1E_3A95_F29B_41CA_E361985C98BB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_125A7A14_3A95_F268_41CB_0C329DDB4254",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 58.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_132A6AFE_3A95_F398_41B2_48DB846861FC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -82.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D2D1764_3A95_F2A8_41B8_EA4597671F40",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -30.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1307FB2D_3A95_F2B8_41B3_8F5D08284A3B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -52.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D54F81F_3A95_FE98_41C4_6DA1C00EE883",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DC0C735_3A95_F2A8_41C8_3F73020662D0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -56.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13A6FA81_3A95_F268_41BA_EEC93D4235F5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -164.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D7907C2_3A95_F1EB_41CB_DC2CEFDFCC95",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 159.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DAB467A_3A95_F29B_41C2_F1CD3B2644D1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -61.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1DBDF66A_3A95_F2B8_41B8_612D7BB07154",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7",
   "camera": "this.panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E",
   "camera": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B",
   "camera": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FF965F_3A68_C6BA_4164_427FB98D2699",
   "camera": "this.panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3",
   "camera": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429",
   "camera": "this.panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC",
   "camera": "this.panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24",
   "camera": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E",
   "camera": "this.panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C",
   "camera": "this.panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883",
   "camera": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B",
   "camera": "this.panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C",
   "camera": "this.panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04",
   "camera": "this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE",
   "camera": "this.panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F",
   "camera": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943",
   "camera": "this.panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC",
   "camera": "this.panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FA2E91_3A68_4786_4193_84ABE4F59994",
   "camera": "this.panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37",
   "camera": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB",
   "camera": "this.panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83",
   "camera": "this.panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30A97B51_3A68_4E89_41CC_F10E3241620D",
   "camera": "this.panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58",
   "camera": "this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F",
   "camera": "this.panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC",
   "camera": "this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402",
   "camera": "this.panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2",
   "camera": "this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -43.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_133CBAEF_3A95_F3B9_41A0_C440583DE9F0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "14",
 "id": "panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 8.02,
   "yaw": -121.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883"
  },
  {
   "backwardYaw": -78.27,
   "yaw": 87.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F"
  },
  {
   "backwardYaw": 167.66,
   "yaw": -19.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE"
  }
 ],
 "overlays": [
  "this.overlay_2DA0EAAA_3AB4_D3BB_4190_4A5984A09F58",
  "this.overlay_2276B87A_3AB7_DE98_41C0_ADC269584991",
  "this.overlay_22CAF742_3AB7_52E8_41C3_E2A1F8142CEA"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_t.jpg"
},
{
 "initialPosition": {
  "yaw": 90.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12E928EB_3A95_FFB9_41C2_DCEA7F4B8632",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "05",
 "id": "panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 115.13,
   "yaw": -20.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24"
  },
  {
   "backwardYaw": 34.36,
   "yaw": 174.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B"
  },
  {
   "backwardYaw": 57.57,
   "yaw": -132.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429"
  },
  {
   "backwardYaw": 75.78,
   "yaw": -62.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC"
  }
 ],
 "overlays": [
  "this.overlay_2B7EA480_3A95_5668_41CC_EB1138ED3C04",
  "this.overlay_2E9A90D9_3A95_6F99_41C4_57C41FA3F7D0",
  "this.overlay_29CB749D_3A94_D799_41C1_C7C5AF53B29F",
  "this.overlay_19133F7C_3A95_F298_41BC_73D0A50A8C0B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_t.jpg"
},
{
 "initialPosition": {
  "yaw": -171.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1395FA91_3A95_F268_41BA_3B48C4B85F42",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "16",
 "id": "panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -154.54,
   "yaw": 136.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37"
  },
  {
   "backwardYaw": 91.13,
   "yaw": -166.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": 120.42,
   "yaw": 23.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943"
  },
  {
   "backwardYaw": 87.36,
   "yaw": -78.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04"
  },
  {
   "backwardYaw": 107.2,
   "yaw": 97.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FA2E91_3A68_4786_4193_84ABE4F59994"
  }
 ],
 "overlays": [
  "this.overlay_220BD8CE_3AB4_DFF8_41C4_E0EBC898FDEE",
  "this.overlay_22542920_3AB4_BEA8_41B0_5950A08614ED",
  "this.overlay_23BDEA2D_3ABB_52B8_41C7_8678E5A4C9FA",
  "this.overlay_23F30C94_3ABB_7668_41C4_E1C93D23884F",
  "this.overlay_20B124B0_3ABD_D7A8_4198_248DEBE1F2D2"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_t.jpg"
},
{
 "initialPosition": {
  "yaw": 51.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C4E765A_3A95_F298_4193_4E5F033CCBF2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20",
 "id": "panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.91,
   "yaw": -50.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB"
  },
  {
   "backwardYaw": -82.8,
   "yaw": 123.87,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30A97B51_3A68_4E89_41CC_F10E3241620D"
  },
  {
   "backwardYaw": 136.46,
   "yaw": -154.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -157.51,
   "yaw": 15.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83"
  },
  {
   "backwardYaw": -111.76,
   "yaw": 65.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58"
  }
 ],
 "overlays": [
  "this.overlay_21AA796A_3ABD_BEB8_41C7_DF6A3743E09F",
  "this.overlay_21C7D9BA_3ABD_7198_41C7_85FE7BF4119E",
  "this.overlay_2138E0F8_3ABC_AFA7_41CB_0523130EE201",
  "this.overlay_26D04961_3ABC_FEA9_41B4_7A13C6D199F4",
  "this.overlay_27933D8C_3ABC_D678_41B7_68ABC6129A8F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 35.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_126CF9F5_3A95_F1A9_419C_934C144D46AF",
 "class": "PanoramaCamera"
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "07",
 "id": "panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -62.52,
   "yaw": 75.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3"
  }
 ],
 "overlays": [
  "this.overlay_29E9680D_3A95_BE79_41B1_A9B571351D5C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_t.jpg"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09",
 "id": "panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "backwardYaw": -128.96,
   "yaw": 60.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24"
  }
 ],
 "overlays": [
  "this.overlay_2F9432D4_3A8C_B3EF_416E_957B7253D029"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_t.jpg"
},
{
 "initialPosition": {
  "yaw": 68.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C72662B_3A95_F2B8_41A7_CBEA59331A6F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 101.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13828AA1_3A95_F3A9_41B4_83F5F3202510",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -156.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1319FB0E_3A95_F278_41C7_E7B453C237B2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04",
 "id": "panorama_30FF965F_3A68_C6BA_4164_427FB98D2699",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B"
  }
 ],
 "overlays": [
  "this.overlay_2B1555E9_3A9B_51B8_41AC_EBAB3F78D78B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "hfovMin": "150%",
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_t.jpg"
},
{
 "initialPosition": {
  "yaw": 123.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13B7FA72_3A95_F2AB_41CB_20D4751D1ED6",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 167.66,
   "hfov": 15.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04, this.camera_1D42483F_3A95_FE99_41CB_0316C455EA5C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A9CABD_3A95_7398_41C5_CDE031CAA1A2",
   "pitch": -16.2,
   "yaw": 167.66,
   "hfov": 15.96,
   "distance": 100
  }
 ],
 "id": "overlay_22C4E112_3AB5_AE68_41B5_935DE02C2770",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -68.61,
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FF965F_3A68_C6BA_4164_427FB98D2699, this.camera_128C68BC_3A95_FF9F_41C1_A2492D09BC2A); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A55AB4_3A95_73A8_41CB_3959E03E63AC",
   "pitch": -14.17,
   "yaw": -68.61,
   "hfov": 13.66,
   "distance": 100
  }
 ],
 "id": "overlay_2AF063C2_3A9C_D1EB_41B7_F587AF7B88C5",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 34.36,
   "hfov": 11.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3, this.camera_12FBE8CB_3A95_FFF8_41BC_50697D898B40); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A53AB4_3A95_73A8_41CB_A6633986DD80",
   "pitch": -7.55,
   "yaw": 34.36,
   "hfov": 11.35,
   "distance": 100
  }
 ],
 "id": "overlay_2BE3F9D8_3A9D_51E7_41A1_292BC5959906",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.66,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30, this.camera_12E928EB_3A95_FFB9_41C2_DCEA7F4B8632); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A6EAB5_3A95_73A8_41CB_479BA861B153",
   "pitch": -12.96,
   "yaw": 92.66,
   "hfov": 11.16,
   "distance": 100
  }
 ],
 "id": "overlay_2B745EC1_3A9C_B3E9_41B6_0B8ABEA7F826",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -111.76,
   "hfov": 12.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37, this.camera_1D6827E1_3A95_F1A8_419C_D34F060006F7); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AAFAC3_3A95_73E8_41B7_D5492DD2A1F4",
   "pitch": -2.01,
   "yaw": -111.76,
   "hfov": 12.33,
   "distance": 100
  }
 ],
 "id": "overlay_24B63690_3AB5_7268_41B4_91AD6CA4AF66",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 65.78,
   "hfov": 21.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F, this.camera_1D656800_3A95_FE68_41BD_5CEF27EC1590); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AADAC4_3A95_73E8_41B6_B5BCF5C0F4A2",
   "pitch": -12.29,
   "yaw": 65.78,
   "hfov": 21.91,
   "distance": 100
  }
 ],
 "id": "overlay_254E0C64_3AB5_B6AF_41A0_17071B83107B",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 149.03,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.21
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC, this.camera_1D54F81F_3A95_FE98_41C4_6DA1C00EE883); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AA8AC4_3A95_73E8_41C7_9FB3ADBD672B",
   "pitch": -7.21,
   "yaw": 149.03,
   "hfov": 11.52,
   "distance": 100
  }
 ],
 "id": "overlay_1AAA8AE8_3AB4_B3B8_41B8_9D80BACF05C6",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -126.14,
   "hfov": 15.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC, this.camera_126CF9F5_3A95_F1A9_419C_934C144D46AF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19ABCAC6_3A95_73E8_41BC_3E60B5DDF69F",
   "pitch": -15.9,
   "yaw": -126.14,
   "hfov": 15.6,
   "distance": 100
  }
 ],
 "id": "overlay_1A005345_3A8F_D2E8_41CC_64C8821BA833",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.14,
   "hfov": 14.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B, this.camera_1D0B97A2_3A95_F1A8_41C8_30B8EA3371D3); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AAEAC7_3A95_73E8_41C6_0FE7767CF482",
   "pitch": -12.7,
   "yaw": -89.14,
   "hfov": 14.2,
   "distance": 100
  }
 ],
 "id": "overlay_188020C5_3A8D_AFE8_418B_3B8B417DBBA0",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 51.08,
   "hfov": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.65
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2, this.camera_1D1CE783_3A95_F268_4197_6F825897C6AF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AACAC8_3A95_73F8_41C7_BC3BAE44D9DF",
   "pitch": -9.65,
   "yaw": 51.08,
   "hfov": 13.39,
   "distance": 100
  }
 ],
 "id": "overlay_18DB486E_3A8D_7EB8_41B5_EC56552FEB94",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 115.13,
   "hfov": 13.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3, this.camera_1DAB467A_3A95_F29B_41C2_F1CD3B2644D1); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A7EAB7_3A95_73A8_4170_778D5091684D",
   "pitch": -9.29,
   "yaw": 115.13,
   "hfov": 13.07,
   "distance": 100
  }
 ],
 "id": "overlay_29232A66_3A8B_72A8_41BC_6EFF4298118F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -128.96,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E, this.camera_1C50264B_3A95_F2F9_41CA_450190FCB43B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A7CAB8_3A95_7398_41CC_CF51A60ECB76",
   "pitch": 2.08,
   "yaw": -128.96,
   "hfov": 11.49,
   "distance": 100
  }
 ],
 "id": "overlay_2F6F55D7_3A8C_B1E9_418E_AC7B4E6EBBFD",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -58.77,
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883, this.camera_1DBDF66A_3A95_F2B8_41B8_612D7BB07154); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A7AAB8_3A95_7398_41C7_4D2FEAF512BA",
   "pitch": -5.29,
   "yaw": -58.77,
   "hfov": 11.58,
   "distance": 100
  }
 ],
 "id": "overlay_2FBDAF2E_3A8D_52BB_41BF_4078E1F99089",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.73,
   "hfov": 11.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C, this.camera_1C4E765A_3A95_F298_4193_4E5F033CCBF2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A79AB9_3A95_7398_41A8_EAFA9732EF7F",
   "pitch": -6.06,
   "yaw": -12.73,
   "hfov": 11.95,
   "distance": 100
  }
 ],
 "id": "overlay_2F015B4F_3A8D_B2F9_41A4_55DF6B5C02CF",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 118.1,
   "hfov": 15.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24, this.camera_13DE4AD0_3A95_F3E7_41CA_C77E4E7B600D); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A73ABA_3A95_7398_41AB_0196C12075DA",
   "pitch": -9.97,
   "yaw": 118.1,
   "hfov": 15.07,
   "distance": 100
  }
 ],
 "id": "overlay_2FCCA701_3A8D_5268_41C3_78CF4856C60E",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.82,
   "hfov": 17.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B, this.camera_13CD3ADF_3A95_F398_41C3_48852FBCA272); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8EABA_3A95_7398_41BF_069B77640EE5",
   "pitch": 4.85,
   "yaw": -108.82,
   "hfov": 17.7,
   "distance": 100
  }
 ],
 "id": "overlay_2DF3B83E_3A8D_7E98_41C7_F35A133B9649",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -57.42,
   "hfov": 16.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C, this.camera_133CBAEF_3A95_F3B9_41A0_C440583DE9F0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8CABA_3A95_7398_41BC_9144B6047396",
   "pitch": 6.49,
   "yaw": -57.42,
   "hfov": 16.73,
   "distance": 100
  }
 ],
 "id": "overlay_2C0286DE_3A8C_B398_41A1_1D6C39695226",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 8.02,
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04, this.camera_132A6AFE_3A95_F398_41B2_48DB846861FC); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8AABB_3A95_7398_41AD_F14E5A161FAB",
   "pitch": -6.22,
   "yaw": 8.02,
   "hfov": 11.75,
   "distance": 100
  }
 ],
 "id": "overlay_2C6C493D_3A8B_FE98_4186_3C55713F71D4",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -64.24,
   "hfov": 15.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.05
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A59AB3_3A95_73A8_41C4_56844975C80A",
   "pitch": -5.05,
   "yaw": -64.24,
   "hfov": 15.91,
   "distance": 100
  }
 ],
 "id": "overlay_352B55E6_3A9C_B1A8_41B9_CE3585F1EFFD",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.17,
   "hfov": 18.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 33.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7, this.camera_13EF1AC0_3A95_F3E8_41B8_58FAE4177EBA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A57AB4_3A95_73A8_4175_7E9E1E619562",
   "pitch": 33.44,
   "yaw": -1.17,
   "hfov": 18.73,
   "distance": 100
  }
 ],
 "id": "overlay_2AEDCCB2_3A9D_57AB_41C3_C46E6F9C9025",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 57.57,
   "hfov": 13.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3, this.camera_127D69D6_3A95_F1EB_41BA_9AD1A230EA4F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A65AB6_3A95_73A8_41C7_0109C46DB138",
   "pitch": -14.66,
   "yaw": 57.57,
   "hfov": 13.47,
   "distance": 100
  }
 ],
 "id": "overlay_2980C790_3A94_D268_41BE_D7DC4AF2F144",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -128.45,
   "hfov": 19.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.52
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24, this.camera_1D9AC689_3A95_F278_4194_81C1B5E0227D); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A75ABA_3A95_7398_41C1_5604CA6831B0",
   "pitch": -11.52,
   "yaw": -128.45,
   "hfov": 19.13,
   "distance": 100
  }
 ],
 "id": "overlay_2F99A603_3A8F_7268_41B9_E6C90D3E33CE",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 122.8,
   "hfov": 14.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58, this.camera_1D97D699_3A95_F399_41AC_14C1084414EE); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AA6AC4_3A95_73E8_4190_AE316139A8B5",
   "pitch": -22.86,
   "yaw": 122.8,
   "hfov": 14.28,
   "distance": 100
  }
 ],
 "id": "overlay_25B2154C_3A8B_56FF_41C9_978EBC78EFA7",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -134.9,
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E, this.camera_1D3FA745_3A95_F2E9_41B2_A59FB8C6E245); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2B448DC9_3A97_B1F8_41A2_2F670F2D05BB",
   "pitch": -21.24,
   "yaw": -134.9,
   "hfov": 6.14,
   "distance": 100
  }
 ],
 "id": "overlay_34565BB8_3A94_D198_41CB_5889FAA86000",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -105.25,
   "hfov": 13.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30, this.camera_13B84A53_3A95_F2E9_4193_56EAEC0954A1); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19ABAAC6_3A95_73E8_41C8_BEFBB6D137FC",
   "pitch": -6.83,
   "yaw": -105.25,
   "hfov": 13.93,
   "distance": 100
  }
 ],
 "id": "overlay_1BA428C3_3A8C_BFE9_4199_EFEE25965DF1",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 73.53,
   "hfov": 13.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC, this.camera_13B7FA72_3A95_F2AB_41CB_20D4751D1ED6); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A90AC7_3A95_73E8_41B1_5BE83D83784B",
   "pitch": -8.57,
   "yaw": 73.53,
   "hfov": 13.65,
   "distance": 100
  }
 ],
 "id": "overlay_1BFEAC95_3A8C_D669_41B6_BDDB96A95479",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -157.51,
   "hfov": 21.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37, this.camera_1D7907C2_3A95_F1EB_41CB_DC2CEFDFCC95); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A95AC2_3A95_73E8_4198_2AED9CA71B0E",
   "pitch": -9.67,
   "yaw": -157.51,
   "hfov": 21.36,
   "distance": 100
  }
 ],
 "id": "overlay_27D80686_3AB7_F268_418B_B9F2E20E666F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.42,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F, this.camera_1319FB0E_3A95_F278_41C7_E7B453C237B2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A89ABF_3A95_7398_41B6_E156CA9FEFB0",
   "pitch": -12.44,
   "yaw": 120.42,
   "hfov": 11.79,
   "distance": 100
  }
 ],
 "id": "overlay_20A5A93E_3ABF_5E98_41CB_5450BEE7ABFF",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 107.2,
   "hfov": 24.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.43
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F, this.camera_1D2D1764_3A95_F2A8_41B8_EA4597671F40); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A85AC0_3A95_73E8_41C4_8C2ABA933CC4",
   "pitch": -12.43,
   "yaw": 107.2,
   "hfov": 24.13,
   "distance": 100
  }
 ],
 "id": "overlay_200197F9_3ABD_5198_41B3_6C763D60F049",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.8,
   "hfov": 12.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37, this.camera_13A6FA81_3A95_F268_41BA_EEC93D4235F5); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A91AC3_3A95_73E8_41C2_F47A97334EF0",
   "pitch": -6.59,
   "yaw": -82.8,
   "hfov": 12.73,
   "distance": 100
  }
 ],
 "id": "overlay_2763BE28_3AB7_52B8_41A0_ECA4B1B5E9D2",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.13,
   "hfov": 15.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F, this.camera_124ABA33_3A95_F2A8_41C9_583EB91525FB); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A87ABF_3A95_7398_41B2_4AA91421E2DB",
   "pitch": -4.42,
   "yaw": 91.13,
   "hfov": 15.41,
   "distance": 100
  }
 ],
 "id": "overlay_20CB8E0F_3ABF_5279_41A0_F304B9EF3D54",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 117.91,
   "hfov": 6.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37, this.camera_125A7A14_3A95_F268_41CB_0C329DDB4254); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A97AC2_3A95_73E8_41BC_668DCFCE1B4C",
   "pitch": -17.93,
   "yaw": 117.91,
   "hfov": 6.27,
   "distance": 100
  }
 ],
 "id": "overlay_27BF9486_3AB4_B668_41CC_DA21F9C76A8D",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.62,
   "hfov": 14.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.54
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883, this.camera_1C61C63B_3A95_F298_41C4_6A4BC6FDC018); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A87ABB_3A95_7398_41C5_119324BFC934",
   "pitch": -16.54,
   "yaw": 136.62,
   "hfov": 14.69,
   "distance": 100
  }
 ],
 "id": "overlay_2C6FFEDB_3AB5_D398_41C1_1AAFDCD5C88B",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -144.64,
   "hfov": 18.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402, this.camera_13756B3D_3A95_F298_41C2_399B4106CC25); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AA5AC5_3A95_73E8_41AB_AB1EA14AFD40",
   "pitch": -4.83,
   "yaw": -144.64,
   "hfov": 18.3,
   "distance": 100
  }
 ],
 "id": "overlay_25C31721_3A8C_B2A8_41B1_AC047C8205E5",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -56.55,
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30B647BF_3A78_45FA_4185_BB01979A79E2, this.camera_1308CB1E_3A95_F29B_41CA_E361985C98BB); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19AA3AC5_3A95_73E8_41CC_FD4F4043B599",
   "pitch": -6.24,
   "yaw": -56.55,
   "hfov": 14.34,
   "distance": 100
  }
 ],
 "id": "overlay_251A8E62_3A8D_52A8_41A0_2D3930F6C16C",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 127.31,
   "hfov": 14.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58, this.camera_1307FB2D_3A95_F2B8_41B3_8F5D08284A3B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19ABEAC6_3A95_73E8_41C1_DFFAADDC928E",
   "pitch": -7.51,
   "yaw": 127.31,
   "hfov": 14.22,
   "distance": 100
  }
 ],
 "id": "overlay_25575BC5_3A8D_51E9_41C7_CABDBA578366",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 82.77,
   "hfov": 12.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883, this.camera_12D78929_3A95_FEB8_41AC_7547141886C8); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A89ABB_3A95_7398_41C4_6FAE14490012",
   "pitch": -21.71,
   "yaw": 82.77,
   "hfov": 12.13,
   "distance": 100
  }
 ],
 "id": "overlay_2C2D62CD_3AB4_B3F9_41C9_FD78B95B9888",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.31,
   "hfov": 13.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BF57D6_3A68_C58A_41C3_E739DE539883, this.camera_1395FA91_3A95_F268_41BA_3B48C4B85F42); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A85ABC_3A95_7398_41C1_0740F90A8FDD",
   "pitch": -9.81,
   "yaw": -121.31,
   "hfov": 13.18,
   "distance": 100
  }
 ],
 "id": "overlay_2DA0EAAA_3AB4_D3BB_4190_4A5984A09F58",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -19.09,
   "hfov": 18.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE, this.camera_13F1AAB0_3A95_F3A8_41B5_F5FFD5CF4968); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A83ABC_3A95_7398_41B6_D9E251F6E510",
   "pitch": -2.12,
   "yaw": -19.09,
   "hfov": 18.46,
   "distance": 100
  }
 ],
 "id": "overlay_2276B87A_3AB7_DE98_41C0_ADC269584991",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.36,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F, this.camera_13828AA1_3A95_F3A9_41B4_83F5F3202510); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A9EABC_3A95_7398_41BB_88D795EF5180",
   "pitch": -10.42,
   "yaw": 87.36,
   "hfov": 11.44,
   "distance": 100
  }
 ],
 "id": "overlay_22CAF742_3AB7_52E8_41C3_E2A1F8142CEA",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -132.41,
   "hfov": 17.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429, this.camera_1DE3D6F7_3A95_F3A9_41C4_8529481B0DA0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A6AAB5_3A95_73A8_41C4_3B90E8C67A85",
   "pitch": -3.07,
   "yaw": -132.41,
   "hfov": 17.59,
   "distance": 100
  }
 ],
 "id": "overlay_2B7EA480_3A95_5668_41CC_EB1138ED3C04",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.52,
   "hfov": 13.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC, this.camera_1DD15716_3A95_F26B_41C5_4BEE11788B8E); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A69AB6_3A95_73A8_41CA_EB7F4A6AC801",
   "pitch": -0.88,
   "yaw": -62.52,
   "hfov": 13.87,
   "distance": 100
  }
 ],
 "id": "overlay_2E9A90D9_3A95_6F99_41C4_57C41FA3F7D0",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 174.38,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B, this.camera_1DF5B6D7_3A95_F3E8_41AE_A5C95083BB22); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A67AB6_3A95_73A8_41CA_6A1277332EC2",
   "pitch": -10.15,
   "yaw": 174.38,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_29CB749D_3A94_D799_41C1_C7C5AF53B29F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -20.21,
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24, this.camera_1D8636A8_3A95_F3B8_4192_25AEB4551A9B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1C89ECEE_3A94_B7B8_41B3_D6A2587D37B1",
   "pitch": -3.34,
   "yaw": -20.21,
   "hfov": 11.58,
   "distance": 100
  }
 ],
 "id": "overlay_19133F7C_3A95_F298_41BC_73D0A50A8C0B",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.27,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04, this.camera_1210C997_3A95_FE68_41C8_60530D7F2523); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A75ABD_3A95_7398_41CD_0D6E39409119",
   "pitch": -6.24,
   "yaw": -78.27,
   "hfov": 10.97,
   "distance": 100
  }
 ],
 "id": "overlay_220BD8CE_3AB4_DFF8_41C4_E0EBC898FDEE",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 23.58,
   "hfov": 6.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.47
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943, this.camera_1222B978_3A95_FEA7_41A4_8339997C5309); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A70ABD_3A95_7398_41C3_7EFE46CC16B2",
   "pitch": -2.47,
   "yaw": 23.58,
   "hfov": 6.58,
   "distance": 100
  }
 ],
 "id": "overlay_22542920_3AB4_BEA8_41B0_5950A08614ED",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.97,
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA2E91_3A68_4786_4193_84ABE4F59994, this.camera_120FA9B6_3A95_F1A8_41CA_B65B0C0AE25F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8EABE_3A95_7398_41BA_61CAFC0077D7",
   "pitch": -6.67,
   "yaw": 97.97,
   "hfov": 6.55,
   "distance": 100
  }
 ],
 "id": "overlay_23BDEA2D_3ABB_52B8_41C7_8678E5A4C9FA",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.46,
   "hfov": 6.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.23
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8CABE_3A95_7398_41B4_C6A791B7A662",
   "pitch": -10.23,
   "yaw": 136.46,
   "hfov": 6.49,
   "distance": 100
  }
 ],
 "id": "overlay_23F30C94_3ABB_7668_41C4_E1C93D23884F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -166.41,
   "hfov": 16.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.53
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A8BABE_3A95_7398_41CB_D0ED6175C954",
   "pitch": -10.53,
   "yaw": -166.41,
   "hfov": 16.36,
   "distance": 100
  }
 ],
 "id": "overlay_20B124B0_3ABD_D7A8_4198_248DEBE1F2D2",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -154.54,
   "hfov": 12.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.51
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A80AC0_3A95_73E8_4167_A61439D28BF0",
   "pitch": -6.51,
   "yaw": -154.54,
   "hfov": 12.14,
   "distance": 100
  }
 ],
 "id": "overlay_21AA796A_3ABD_BEB8_41C7_DF6A3743E09F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -50.53,
   "hfov": 23.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A9EAC0_3A95_73E8_41C2_19DF2CCE89CE",
   "pitch": -0.94,
   "yaw": -50.53,
   "hfov": 23.21,
   "distance": 100
  }
 ],
 "id": "overlay_21C7D9BA_3ABD_7198_41C7_85FE7BF4119E",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 123.87,
   "hfov": 14.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.94
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A9CAC1_3A95_73E8_41B2_1FB81B9823CA",
   "pitch": -1.94,
   "yaw": 123.87,
   "hfov": 14.62,
   "distance": 100
  }
 ],
 "id": "overlay_2138E0F8_3ABC_AFA7_41CB_0523130EE201",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.75,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83, this.camera_1C04261C_3A95_F29F_41C0_8E8D54FFC99C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A9BAC1_3A95_73E8_41C8_EB55046EB274",
   "pitch": -10.57,
   "yaw": 15.75,
   "hfov": 12.47,
   "distance": 100
  }
 ],
 "id": "overlay_26D04961_3ABC_FEA9_41B4_7A13C6D199F4",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 65.58,
   "hfov": 15.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58, this.camera_1C72662B_3A95_F2B8_41A7_CBEA59331A6F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A99AC2_3A95_73E8_41C3_394BB86752B1",
   "pitch": -10.55,
   "yaw": 65.58,
   "hfov": 15.33,
   "distance": 100
  }
 ],
 "id": "overlay_27933D8C_3ABC_D678_41B7_68ABC6129A8F",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 75.78,
   "hfov": 17.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3, this.camera_1DC0C735_3A95_F2A8_41C8_3F73020662D0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A63AB7_3A95_73A8_41AE_B86C9D9D5148",
   "pitch": -11.53,
   "yaw": 75.78,
   "hfov": 17.62,
   "distance": 100
  }
 ],
 "id": "overlay_29E9680D_3A95_BE79_41B1_A9B571351D5C",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 60.39,
   "hfov": 20.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24, this.camera_12D8190A_3A95_FE7B_41AB_1012CF74D74B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A77AB9_3A95_7398_41C7_8AFF09F4943E",
   "pitch": -15.78,
   "yaw": 60.39,
   "hfov": 20.98,
   "distance": 100
  }
 ],
 "id": "overlay_2F9432D4_3A8C_B3EF_416E_957B7253D029",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.27,
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.4
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_19A6CAB5_3A95_73A8_41CC_97043BF51D7E",
   "pitch": -7.4,
   "yaw": 40.27,
   "hfov": 10.19,
   "distance": 100
  }
 ],
 "id": "overlay_2B1555E9_3A9B_51B8_41AC_EBAB3F78D78B",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30B525B2_3A6B_C58A_41C3_9BC85681EDDE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A9CABD_3A95_7398_41C5_CDE031CAA1A2",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A55AB4_3A95_73A8_41CB_3959E03E63AC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A53AB4_3A95_73A8_41CB_A6633986DD80",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FEB08E_3A68_7B9A_41C1_0829554D008B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A6EAB5_3A95_73A8_41CB_479BA861B153",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AAFAC3_3A95_73E8_41B7_D5492DD2A1F4",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AADAC4_3A95_73E8_41B6_B5BCF5C0F4A2",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E5BCCB_3A77_CB9A_41B3_5F0A9200BD58_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AA8AC4_3A95_73E8_41C7_9FB3ADBD672B",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30A83B9A_3A78_CDBA_41C9_9E43D754A402_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19ABCAC6_3A95_73E8_41BC_3E60B5DDF69F",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AAEAC7_3A95_73E8_41C6_0FE7767CF482",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E62888_3A79_CB87_41C0_17CEFAA66E30_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AACAC8_3A95_73F8_41C7_BC3BAE44D9DF",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A7EAB7_3A95_73A8_4170_778D5091684D",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A7CAB8_3A95_7398_41CC_CF51A60ECB76",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A7AAB8_3A95_7398_41C7_4D2FEAF512BA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FED9C5_3A69_CD8E_41C8_D770767A3B24_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A79AB9_3A95_7398_41A8_EAFA9732EF7F",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A73ABA_3A95_7398_41AB_0196C12075DA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8EABA_3A95_7398_41BF_069B77640EE5",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8CABA_3A95_7398_41BC_9144B6047396",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BF57D6_3A68_C58A_41C3_E739DE539883_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8AABB_3A95_7398_41AD_F14E5A161FAB",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A59AB3_3A95_73A8_41C4_56844975C80A",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30D8E7C2_3A6F_C58A_41C5_4AF00F99BC0E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A57AB4_3A95_73A8_4175_7E9E1E619562",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FF90EB_3A68_5B9A_41BC_7E909FE63429_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A65AB6_3A95_73A8_41C7_0109C46DB138",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30F942E9_3A68_7F86_41B3_3B95D83A314C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A75ABA_3A95_7398_41C1_5604CA6831B0",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30AB907F_3A78_5B7A_41B3_48D7CDD17D3F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AA6AC4_3A95_73E8_4190_AE316139A8B5",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_366C44F5_3A8C_D7A9_41CB_5AE2DE50BAC7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2B448DC9_3A97_B1F8_41A2_2F670F2D05BB",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19ABAAC6_3A95_73E8_41C8_BEFBB6D137FC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30B647BF_3A78_45FA_4185_BB01979A79E2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A90AC7_3A95_73E8_41B1_5BE83D83784B",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FAE3CC_3A68_DD9E_41B3_C2883B24FC83_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A95AC2_3A95_73E8_4198_2AED9CA71B0E",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30D8D10B_3A68_DA9A_41A0_49B63826B943_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A89ABF_3A95_7398_41B6_E156CA9FEFB0",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA2E91_3A68_4786_4193_84ABE4F59994_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A85AC0_3A95_73E8_41C4_8C2ABA933CC4",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30A97B51_3A68_4E89_41CC_F10E3241620D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A91AC3_3A95_73E8_41C2_F47A97334EF0",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA0400_3A68_5A86_41C9_92BC6EE7F3AC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A87ABF_3A95_7398_41B2_4AA91421E2DB",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30B4429A_3A68_5FBA_41A8_B6DA01C7B0EB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A97AC2_3A95_73E8_41BC_668DCFCE1B4C",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30A4C1CF_3A68_5D9A_41B9_7BECD5A72B2C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A87ABB_3A95_7398_41C5_119324BFC934",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AA5AC5_3A95_73E8_41AB_AB1EA14AFD40",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19AA3AC5_3A95_73E8_41CC_FD4F4043B599",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DB33AA_3A78_BD9A_41AC_04721165D5EC_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19ABEAC6_3A95_73E8_41C1_DFFAADDC928E",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30F9CD09_3A68_CA86_41C2_F36C78629C2B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A89ABB_3A95_7398_41C4_6FAE14490012",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A85ABC_3A95_7398_41C1_0740F90A8FDD",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A83ABC_3A95_7398_41B6_D9E251F6E510",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30F9CBB1_3A68_4D86_41B5_77DCBD88DD04_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A9EABC_3A95_7398_41BB_88D795EF5180",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A6AAB5_3A95_73A8_41C4_3B90E8C67A85",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A69AB6_3A95_73A8_41CA_EB7F4A6AC801",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A67AB6_3A95_73A8_41CA_6A1277332EC2",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BACBC5_3A68_CD8E_41AA_62BD6014CAE3_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_1C89ECEE_3A94_B7B8_41B3_D6A2587D37B1",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A75ABD_3A95_7398_41CD_0D6E39409119",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A70ABD_3A95_7398_41C3_7EFE46CC16B2",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8EABE_3A95_7398_41BA_61CAFC0077D7",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8CABE_3A95_7398_41B4_C6A791B7A662",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BB06C4_3A68_478E_41CB_0DB6BFD4204F_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A8BABE_3A95_7398_41CB_D0ED6175C954",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A80AC0_3A95_73E8_4167_A61439D28BF0",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A9EAC0_3A95_73E8_41C2_19DF2CCE89CE",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A9CAC1_3A95_73E8_41B2_1FB81B9823CA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A9BAC1_3A95_73E8_41C8_EB55046EB274",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FA3AF8_3A69_CF86_41AD_47D06B0D7D37_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A99AC2_3A95_73E8_41C3_394BB86752B1",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30AE74EF_3A68_5B9A_41BC_3ADC33CFF1CC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A63AB7_3A95_73A8_41AE_B86C9D9D5148",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BAAE24_3A69_C68E_41A6_A6878EFC9C6E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A77AB9_3A95_7398_41C7_8AFF09F4943E",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30FF965F_3A68_C6BA_4164_427FB98D2699_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_19A6CAB5_3A95_73A8_41CC_97043BF51D7E",
 "rowCount": 5,
 "class": "AnimatedImageResource"
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player450"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
