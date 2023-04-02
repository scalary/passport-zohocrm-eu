  /**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = String(json.ZUID);
  profile.displayName = json.Display_Name;
  if (json.email) {
    profile.emails = [{ value: json.email }];
  }

  // Needs to be added on Zoho CRM's OAuth implementation 
  if (json.avatar_url) {
    profile.photos = [{ value: json.avatar_url }];
  }

  return profile;
};
