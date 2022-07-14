## `team_members` table

| Name | Type |

| id SERIAL | PRIMARY KEY |
| "firstName"| VARCHAR(255) NOT NULL |
| "lastName" | VARCHAR(255) NOT NULL |
| title TEXT | NOT NULL |
| "imageURL" | TEXT DEFAULT "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg" |

## `jobs` table

| Name | Type |
| id SERIAL | PRIMARY KEY |
| title TEXT | NOT NULL |
| "jobURL" | UNIQUE NOT NULL |
