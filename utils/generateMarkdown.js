// temporary variables used to create string that displays the badge //
var badge = "";
var link = "";
var licDescription = "";


// Returns a license badge based on user selection //
// If there is no license, returns an empty string with a link to why user should include a license //
// Creates badge with an active link to the license text //
function renderLicenseBadge(answers) {

  switch (answers.License) {

      case 'GNU General Public License v3.0':
      badge = 'https://img.shields.io/badge/license-GNUGPL_v3.0-brightgreen';
      link = 'http://www.gnu.org/licenses/gpl-3.0.html';
      licDescription = `This work is covered under ${answers.License}.  For more information, click on the license badge above.`
      break;

    case 'Apache License 2.0':
      badge = 'https://img.shields.io/badge/license-Apache_v2.0-brightgreen';
      link = 'http://apache.org/licenses/';
      licDescription = `This work is covered under ${answers.License}.  For more information, click on the license badge above.`
      break;

    case 'MIT License':
      badge = 'https://img.shields.io/badge/license-MIT-brightgreen?link=https://opensource.org/licenses/MIT';
      link = 'https://opensource.org/licenses/MIT';
      licDescription = `This work is covered under ${answers.License}.  For more information, click on the license badge above.`
      break;

    case 'Boost Software License 1.0':
      badge = 'https://img.shields.io/badge/license-Boost_v1.0-brightgreen';
      link = 'https://www.boost.org/LICENSE_1_0.txt';
      licDescription = `This work is covered under ${answers.License}.  For more information, click on the license badge above.`
      break;

    case 'Unilicense':
      badge = 'https://img.shields.io/badge/license-Unilicense-brightgreen';
      link = 'https://unlicense.org';
      licDescription = `This work is covered under ${answers.License}.  For more information, click on the license badge above.`
      break;
      
    default:
      badge = 'https://img.shields.io/badge/license-none-brightgreen';
      link = 'https://choosealicense.com/no-permission/';
      licDescription = 'This work is not licensed.'
      console.log('Protect your work!  You might want to consider a license.');
  };
  
  strBadge = `[<img src="${badge}">](${link})`;
  licDescr = `${licDescription}`;
};
// End of renderLicenseBadge //


// Allows renderLicenseBadge function to be exported to other modules //
module.exports = renderLicenseBadge;

