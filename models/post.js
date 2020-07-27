// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
    },
    headerURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })

  }
  return Post;
};
