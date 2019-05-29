const TYPES = {
    IPersonService: Symbol("IPersonService"),
    IUserService: Symbol("IUserService"),
    Sequelize: Symbol.for("Sequelize"),
    PersonService: Symbol("PersonService"),
    User: Symbol('User')
};

export default TYPES;