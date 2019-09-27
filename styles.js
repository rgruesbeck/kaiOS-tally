const Koji = require('@withkoji/vcc').default;

const styles = `
    * {
        font-family: ${Koji.config.settings.fontFamily};
    }

    body {
        background-color: ${Koji.config.colors.bodyBackground};
        color: ${Koji.config.colors.textColor};
        user-select: none;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    .count {
      font-size: 50vw;
      text-align: center;
    }

    .instructions {
      position: absolute;
      bottom: 0;
    }
`;

module.exports.default = styles;
