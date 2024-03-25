import cloudinary from "../../cloudinary.app.mjs";

export default {
  key: "cloudinary-upload-media-asset",
  name: "Upload Media Asset",
  description: "Uploads media assets in the cloud such as images or videos, and allows configuration options to be set on the upload. [See the documentation](https://cloudinary.com/documentation/image_upload_api_reference#upload_method)",
  version: "0.5.3",
  type: "action",
  props: {
    cloudinary,
    file: {
      type: "string",
      label: "File",
      description: "The file to upload. It can be:\n* a local file path\n* the actual data (byte array buffer).\nFor example, this could be an IO input stream of the data (e.g., File.open(file, \"rb\")).\n* the Data URI (Base64 encoded), max ~60 MB (62,910,000 chars)\n* the remote FTP, HTTP or HTTPS URL address of an existing file\n* a private storage bucket (S3 or Google Storage) URL of a **whitelisted** bucket\nFor details and examples, see: [file source options](https://cloudinary.com/documentation/upload_images#file_source_options).",
    },
    publicId: {
      type: "string",
      label: "Public Id",
      description: "The identifier that is used for accessing the uploaded asset. The Public ID may contain a full path including folders separated by a slash (`/`).\nIf not specified, then the Public ID of the asset will either be comprised of random characters or will use the original file's filename, depending whether `use_filename` was set to true.\n\n**Note**: The Public ID value for images and videos should not include a file extension. Include the file extension for `raw` files only.",
      optional: true,
    },
    folder: {
      type: "string",
      label: "Folder",
      description: "An optional folder name where the uploaded asset will be stored. The public ID contains the full path of the uploaded asset, including the folder name.",
      optional: true,
    },
    useFilename: {
      type: "boolean",
      label: "Use Filename",
      description: "Whether to use the original file name of the uploaded asset. Relevant only if the `public_id` parameter isn't set.\nWhen false and the `public_id` parameter is also not defined, the Public ID will be comprised of random characters.\n\nWhen true and the `public_id` parameter is not defined, the uploaded file's original filename becomes the Public ID. Random characters are appended to the filename value to ensure Public ID uniqueness if `unique_filename` is true.\n\nDefault: `false`.",
      optional: true,
    },
    uniqueFilename: {
      type: "boolean",
      label: "Unique Filename",
      description: "When set to false, does not add random characters at the end of the filename that guarantee its uniqueness. In this case, if the `overwrite` parameter is also false, the upload returns an error. This parameter is relevant only if `use_filename` is also set to true. Default: `true`.",
      optional: true,
    },
    resourceType: {
      propDefinition: [
        cloudinary,
        "uploadResourceType",
      ],
    },
    type: {
      propDefinition: [
        cloudinary,
        "uploadDeliveryType",
      ],
    },
    accessControl: {
      type: "boolean",
      label: "Access Control",
      description: "An array of access types for the asset. The asset is accessible as long as one of the access types is valid.\nPossible values for each access type:\n\n- `token` requires either [Token-based authentication](https://cloudinary.com/documentation/control_access_to_media#token_based_authentication_premium_feature) or [Cookie-based authentication](https://cloudinary.com/documentation/control_access_to_media#cookie_based_authentication_premium_feature) for accessing the asset.\nFor example: `access_type: \"token\"`\n- `anonymous` allows public access to the asset. The anonymous access type can optionally include `start` and/or `end` dates (in ISO 8601 format) that define when the asset is publically available. Note that you can only include a single 'anonymous' access type. For example:\n`access_type: \"anonymous\", start: \"2017-12-15T12:00Z\", end: \"2018-01-20T12:00Z\"`",
      optional: true,
    },
    accessMode: {
      propDefinition: [
        cloudinary,
        "accessMode",
      ],
    },
    discardOriginalFilename: {
      type: "boolean",
      label: "Discard Original Filename",
      description: "Whether to discard the name of the original uploaded file. Relevant when delivering assets as attachments (setting the `flag` transformation parameter to `attachment`). Default: `false`.",
      optional: true,
    },
    overwrite: {
      type: "boolean",
      label: "Overwrite",
      description: "Whether to overwrite existing assets with the same public ID. When set to false, return immediately if an asset with the same Public ID was found. Default: `true` (when using unsigned upload, the default is false and cannot be changed to true).\n**Important**: Depending on the settings for your account, overwriting an asset may clear the tags, contextual, and structured metadata values for that asset. If you prefer these values to always be preserved on overwrite (unless other values are specifically set when uploading the new version), you can [submit a request](https://support.cloudinary.com/hc/en-us/requests/new) to change this behavior for your account.",
      optional: true,
    },
    tags: {
      type: "any",
      label: "Tags",
      description: "An array of tag names to assign to the uploaded asset for later group reference.",
      optional: true,
    },
    context: {
      type: "object",
      label: "Context",
      description: "A map of the key-value pairs of general textual context metadata to attach to an uploaded asset. The context values of uploaded files can be retrieved using the Admin API. For example: `alt=My image?caption=Profile image` (the `=` and `?` characters can be supported as values when escaped with a prepended backslash (`\\`)). Note that key values are limited to 1024 characters and an asset can have a maximum of 1000 context key-value pairs.",
      optional: true,
    },
    colors: {
      type: "boolean",
      label: "Colors",
      description: "Whether to retrieve predominant colors & color histogram of the uploaded image.\n**Note:** If all returned colors are opaque, then 6-digit RGB hex values are returned. If one or more colors contain an alpha channel, then 8-digit RGBA hex quadruplet values are returned.\nDefault: `false`. Relevant for images only.",
      optional: true,
    },
    faces: {
      type: "boolean",
      label: "Faces",
      description: "Whether to return the coordinates of faces contained in an uploaded image (automatically detected or manually defined). Each face is specified by the X & Y coordinates of the top left corner and the width & height of the face. The coordinates for each face are returned as an array (using the SDKs), and individual faces are separated with a pipe (`?`). For example: `10,20,150,130?213,345,82,61`.\nDefault: `false`. Relevant for images only.",
      optional: true,
    },
    qualityAnalysis: {
      type: "boolean",
      label: "Quality Analysis",
      description: "Whether to return a quality analysis value for the image between 0 and 1, where 0 means the image is blurry and out of focus and 1 means the image is sharp and in focus. Default: `false`. Relevant for images only.\nPaid customers can [request to take part](https://support.cloudinary.com/hc/en-us/requests/new) in the extended quality analysis Beta trial. When activated, this parameter returns quality scores for various other factors in addition to `focus`, such as `jpeg_quality`, `noise`, `exposure`, `lighting` and `resolution`, together with an overall weighted `quality_score`. The `quality_score`, `color_quality_score` and `pixel_quality_score` fields can be used in the Search API.",
      optional: true,
    },
    accessibilityAnalysis: {
      type: "boolean",
      label: "Accessibility Analysis",
      description: "Currently available only to paid customers [requesting to take part](https://support.cloudinary.com/hc/en-us/requests/new) in the [accessibility analysis](https://cloudinary.com/documentation/analysis_on_upload#accessibility_analysis) Beta trial. Set to `true` to return accessibility analysis values for the image and to enable the `colorblind_accessibility_score` field to be used in the Search API.\nDefault: `false`. Relevant for images only.",
      optional: true,
    },
    cinemagraphAnalysis: {
      type: "boolean",
      label: "Cinemagraph Analysis",
      description: "Whether to return a cinemagraph analysis value for the media asset between 0 and 1, where 0 means the asset is **not** a cinemagraph and 1 means the asset **is** a cinemagraph. Default: `false`. Relevant for animated images and video only. A static image will return 0.",
      optional: true,
    },
    imageMetadata: {
      type: "string",
      label: "Image Metadata",
      description: "Whether to return IPTC, XMP, and detailed Exif metadata of the uploaded asset in the response.\nDefault: `false`. Supported for images, video, and audio.\nReturned metadata for images includes: `PixelsPerUnitX`, `PixelsPerUnitY`, `PixelUnits`, `Colorspace`, and `DPI`.\nReturned metadata for audio and video includes: `audio_codec`, `audio_bit_rate`, `audio_frequency`, `channels`, `channel_layout`.\nAdditional metadata for video includes: `pix_format`, `codec`, `level`, `profile`, `video_bit_rate`, `dar`.",
      optional: true,
    },
    phash: {
      type: "boolean",
      label: "pHash",
      description: "Whether to return the perceptual hash (pHash) on the uploaded image. The pHash acts as a fingerprint that allows checking image similarity.\nDefault: `false`. Relevant for images only.",
      optional: true,
    },
    responsiveBreakpoints: {
      type: "object",
      label: "Responsive Breakpoints",
      description: "Requests that Cloudinary automatically find the best breakpoints. The parameter value is an array of breakpoint request settings, where each request setting can include the following parameters:\n* `create_derived`(Boolean - Required) If true, create and keep the derived images of the selected breakpoints during the API call. If false, images * generated during the analysis process are thrown away.\n* `format` (String - Optional) Sets the file extension of the derived resources to the format indicated (as opposed to changing the format as part of a transformation - which would be included as part of the transformation component (e.g., f_jpg)).\n* `transformation` (String - Optional) The base transformation to first apply to the image before finding the best breakpoints. The API accepts a string representation of a chained transformation (same as the regular transformation parameter of the upload API).\n* `max_width` (Integer - Optional) The maximum width needed for this image. If specifying a width bigger than the original image, the width of the original image is used instead. Default: `1000`.\n* `min_width` (Integer - Optional) The minimum width needed for this image. Default: `50`.\n* `bytes_step` (Integer - Optional) The minimum number of bytes between two consecutive breakpoints (images). Default: `20000`.\n* `max_images` (Integer - Optional) The maximum number of breakpoints to find, between 3 and 200. This means that there might be size differences bigger than the given bytes_step value between consecutive images. Default: `20`.\nThe return response will include an array of the selected breakpoints for each breakpoint request, where the following information is given for each breakpoint: `transformation`, `width`, `height`, `bytes`, `url` and `secure_url`.\nRelevant for images only.",
      optional: true,
    },
    autoTagging: {
      type: "integer",
      label: "Auto Tagging",
      description: "Whether to assign tags to an asset according to detected scene categories with a confidence score higher than the given value (between 0.0 and 1.0). See the [Google Automatic Video Tagging](https://cloudinary.com/documentation/google_automatic_video_tagging_addon), [Google Auto Tagging](https://cloudinary.com/documentation/google_auto_tagging_addon), [Imagga Auto Tagging](https://cloudinary.com/documentation/imagga_auto_tagging_addon), [Amazon Rekognition Auto Tagging](https://cloudinary.com/documentation/aws_rekognition_auto_tagging_addon), and [Amazon Rekognition Celebrity Detection](https://cloudinary.com/documentation/aws_rekognition_celebrity_and_face_detection_addon) add-ons for more details.",
      optional: true,
    },
    categorization: {
      type: "string",
      label: "Categorization",
      description: "A comma-separated list of the categorization add-ons to run on the asset. Set to `google_tagging`, `google_video_tagging`, `imagga_tagging` and/or `aws_rek_tagging` to automatically classify the scenes of the uploaded asset. See the [Google Automatic Video Tagging](https://cloudinary.com/documentation/google_automatic_video_tagging_addon), [Google Auto Tagging](https://cloudinary.com/documentation/google_auto_tagging_addon), [Imagga Auto Tagging](https://cloudinary.com/documentation/imagga_auto_tagging_addon), and [Amazon Rekognition Auto Tagging](https://cloudinary.com/documentation/aws_rekognition_auto_tagging_addon) add-ons for more details.",
      optional: true,
    },
    detection: {
      type: "string",
      label: "Detection",
      description: "Set to `adv_face` or `aws_rek_face` to extract an extensive list of face attributes from an image using the [Advanced Facial Attribute Detection](https://cloudinary.com/documentation/advanced_facial_attributes_detection_addon) or [Amazon Rekognition Celebrity Detection](https://cloudinary.com/documentation/aws_rekognition_celebrity_and_face_detection_addon) add-ons.\nRelevant for images only.",
      optional: true,
    },
    ocr: {
      type: "string",
      label: "OCR",
      description: "Set to `adv_ocr` to extract all text elements in an image as well as the bounding box coordinates of each detected element using the [OCR text detection and extraction add-on](https://cloudinary.com/documentation/ocr_text_detection_and_extraction_addon). Relevant for images only.",
      optional: true,
    },
    eager: {
      type: "any",
      label: "Eager",
      description: "An array of transformation representations. This generates derived resources in advance, instead of lazily creating each of the derived resources when first accessed by your site's visitors.",
      optional: true,
    },
    eagerAsync: {
      type: "boolean",
      label: "Eager Async",
      description: "Whether to generate the eager transformations asynchronously in the background after the upload request is completed rather than online as part of the upload call. Default: `false`",
      optional: true,
    },
    eagerNotificationUrl: {
      type: "string",
      label: "Eager Notification URL",
      description: "An HTTP or HTTPS URL to send a notification to (a webhook) when the generation of eager transformations is completed.",
      optional: true,
    },
    transformation: {
      type: "string",
      label: "Transformation",
      description: "An incoming transformation to run on the uploaded asset before saving it in the cloud. T his parameter is given as a hash of transformation parameters (or an array of hashes for chained transformations).",
      optional: true,
    },
    format: {
      type: "string",
      label: "Format",
      description: "An optional format to convert the uploaded asset to before saving in the cloud. For example: `jpg`.",
      optional: true,
    },
    customCoordinates: {
      type: "any",
      label: "Custom Coordinates",
      description: "Sets the coordinates of a single region contained in an uploaded image that is subsequently used for cropping uploaded images using the `custom` gravity mode. The region is specified by the X & Y coordinates of the top left corner and the width & height of the region, as an array. For example: `85,120,220,310.`\nRelevant for images only.",
      optional: true,
    },
    faceCoordinates: {
      type: "any",
      label: "Face Coordinates",
      description: "Sets the coordinates of faces contained in an uploaded image and overrides the automatically detected faces. Each face is specified by the X & Y coordinates of the top left corner and the width & height of the face. The coordinates for each face are given as an array.\nRelevant for images only.",
      optional: true,
    },
    backgroundRemoval: {
      type: "string",
      label: "Background Removal",
      description: "Automatically remove the background of an image using an add-on.\nSet to `cloudinary_ai` to use the deep-learning based [Cloudinary AI Background Removal](https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon) add-on.\nSet to `pixelz` to use the human-powered [Pizelz Remove-The-Background Editing](https://cloudinary.com/documentation/remove_the_background_image_editing_addon) add-on service.\nRelevant for images only.",
      optional: true,
    },
    rawConvert: {
      type: "string",
      label: "Raw Convert",
      description: "Asynchronously generates a related file based on the uploaded file.\n* Set to `aspose` to automatically create a PDF or other image format from a `raw` Office document using the [Aspose Document Conversion](https://cloudinary.com/documentation/aspose_document_conversion_addon) add-on.\n* Set to `google_speech` to instruct the [Google AI Video Transcription](https://cloudinary.com/documentation/google_ai_video_transcription_addon) add-on to generate an automatic transcript `raw` file from an uploaded video.\n* Set to `extract_text` to extract all the text from a PDF file and store it in a raw file. The public ID of the generated `raw` file will be in the format: **[pdf_public_id].extract_text.json.**\nSee also: [Converting raw files](https://cloudinary.com/documentation/upload_images#converting_raw_files).",
      optional: true,
    },
    allowedFormats: {
      type: "any",
      label: "Allowed Formats",
      description: "An array of file formats that are allowed for uploading. Files of other types will be rejected. The formats can be any combination of image types, video formats or raw file extensions. For example: `mp4,ogv,jpg,png,pdf`. Default: any supported format for images and videos, and any kind of raw file (i.e. no restrictions by default).",
      optional: true,
    },
    async: {
      type: "boolean",
      label: "Async",
      description: "Whether to perform the request in the background (asynchronously). Default: `false`.",
      optional: true,
    },
    backup: {
      type: "boolean",
      label: "Backup",
      description: "Tell Cloudinary whether to [back up](https://cloudinary.com/documentation/backups_and_version_management) the uploaded asset. Overrides the default backup settings of your account.",
      optional: true,
    },
    eval: {
      type: "string",
      label: "Eval",
      description: "Allows you to modify upload parameters by specifying custom logic with JavaScript. This can be useful for conditionally adding tags, context, metadata or eager transformations depending on specific criteria of the uploaded file. For more details see [Evaluating and modifying upload parameters](https://cloudinary.com/documentation/analysis_on_upload#evaluating_and_modifying_upload_parameters).",
      optional: true,
    },
    headers: {
      type: "string",
      label: "Headers",
      description: "An HTTP header or a list of headers lines for adding as response HTTP headers when delivering the asset to your users. Supported headers: `Link`, `Authorization`, `X-Robots-Tag`. For example: `X-Robots-Tag: noindex`.",
      optional: true,
    },
    invalidate: {
      type: "boolean",
      label: "Invalidate",
      description: "Whether to invalidate CDN cached copies of a previously uploaded asset (and all transformed versions that share the same Public ID). Default: `false`.\nIt usually takes between a few seconds and a few minutes for the invalidation to fully propagate through the CDN. There are also a number of other [important considerations](https://cloudinary.com/documentation/managing_assets#invalidating_cached_media_assets_on_the_cdn) when using the invalidate functionality.",
      optional: true,
    },
    moderation: {
      type: "string",
      label: "Moderation",
      description: "**For all asset types**: Set to `manual` to add the uploaded asset to a queue of pending assets that can be moderated using the Admin API or the [Cloudinary Management Console](https://cloudinary.com/console/media_library), or set to `metascan` to automatically moderate the uploaded asset using the [MetaDefender Anti-Malware Protection](https://cloudinary.com/documentation/metadefender_anti_malware_protection_addon) add-on.\n**For images only**: Set to `webpurify` or `aws_rek` to automatically moderate the uploaded image using the [WebPurify Image Moderation](https://cloudinary.com/documentation/webpurify_image_moderation_addon) add-on or the [Amazon Rekognition AI Moderation](https://cloudinary.com/documentation/aws_rekognition_ai_moderation_addon) add-on respectively.",
      optional: true,
    },
    notificationUrl: {
      type: "string",
      label: "Notification URL",
      description: "An HTTP or HTTPS URL to receive the upload response (a webhook) when the upload or any requested asynchronous action is completed. If not specified, the response is sent to the global **Notification URL** (if defined) in the **Upload** settings of your account console.",
      optional: true,
    },
    proxy: {
      type: "string",
      label: "Proxy",
      description: "Tells Cloudinary to upload assets from remote URLs through the given proxy. Format: `https://hostname:port.`",
      optional: true,
    },
    returnDeleteToken: {
      type: "boolean",
      label: "Return Deleted Token",
      description: "Whether to return a deletion token in the upload response. The token can be used to delete the uploaded asset within 10 minutes using an unauthenticated API request. Default: `false`.",
      optional: true,
    },
  },
  async run({ $ }) {
    const options = {
      public_id: this.publicId,
      folder: this.folder,
      use_filename: this.useFilename,
      unique_filename: this.uniqueFilename,
      resource_type: this.resourceType,
      type: this.type,
      access_control: this.accessControl,
      access_mode: this.accessMode,
      discard_original_filename: this.discardOriginalFilename,
      overwrite: this.overwrite,
      tags: this.tags,
      context: this.context,
      colors: this.colors,
      faces: this.faces,
      quality_analysis: this.qualityAnalysis,
      accessibility_analysis: this.accessibilityAnalysis,
      cinemagraph_analysis: this.cinemagraphAnalysis,
      image_metadata: this.imageMetadata,
      phash: this.phash,
      responsive_breakpoints: this.responsiveBreakpoints,
      auto_tagging: this.autoTagging,
      categorization: this.categorization,
      detection: this.detection,
      ocr: this.ocr,
      eager: this.eager,
      eager_async: this.eagerAsync,
      eager_notification_url: this.eagerNotificationUrl,
      transformation: this.transformation,
      format: this.format,
      custom_coordinates: this.customCoordinates,
      face_coordinates: this.faceCoordinates,
      background_removal: this.backgroundRemoval,
      raw_convert: this.rawConvert,
      allowed_formats: this.allowedFormats,
      async: this.async,
      backup: this.backup,
      eval: this.eval,
      headers: this.headers,
      invalidate: this.invalidate,
      moderation: this.moderation,
      notification_url: this.notification_url,
      proxy: this.proxy,
      return_delete_token: this.returnDeleteToken,
    };

    try {
      const response = await this.cloudinary.uploadMedia(this.file, options);
      if (response) {
        $.export("$summary", "Successfully uploaded media asset");
      }
      return response;
    } catch (e) {
      throw new Error(`${e.name} - ${e.http_code} - ${e.message}`);
    }
  },
};
