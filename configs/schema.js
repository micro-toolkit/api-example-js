module.exports = {
  env: {
    doc: "The applicaton environment.",
    format: ["production", "test", "development"],
    default: "development",
    env: "NODE_ENV"
  },
  baseUrl: {
    doc: "The API base url used on model links",
    format: 'url',
    default: 'http://localhost:8081'
  },
  port: {
    doc: "The API http port",
    format: 'port',
    default: 8081,
    env: "PORT"
  },
  auth: {
    secret: {
      doc: "Logger facade active logging level",
      format: String,
      default: "secret"
    }
  },
  logging: {
    level: {
      doc: "Logger facade active logging level",
      format: ['trace', 'debug', 'info', 'warn', 'error'],
      default: "info"
    },
    timeFormat: {
      doc: "Logger facade time format",
      format: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    },
    messageFormat: {
      doc: "Logger facade message format",
      format: String,
      default: '%time | %logger::%level - %msg'
    }
  },
  // Mico toolkit claims forward configuration
  // this claims should be properties present req.user
  claims: {
    doc: "A list of comma separated claims that should be used to send to service",
    format: String,
    default: "userId,tenantId"
  },
  // ZSS Client default configurations
  defaultService: {
    broker: {
      doc: "ZSS Broker Frontend Address",
      format: String,
      default: "tcp://127.0.0.1:7777"
    },
    timeout: {
      doc: "ZSS Service call default timeout in ms",
      format: "nat",
      default: 1000
    },
    identity: {
      doc: "ZSS Service client identity",
      format: String,
      default: 'API'
    }
  },
  // ZSS TASK Service Client Configuration
  taskService: {
    sid: {
      doc: "The task service name identifier",
      format: String,
      default: "TASK"
    }
  },
  // ZSS USER Service Client Configuration
  userService: {
    sid: {
      doc: "The user service name identifier",
      format: String,
      default: "USER"
    }
  },
  // ZSS Role Service Client Configuration
  roleService: {
    sid: {
      doc: "The role service name identifier",
      format: String,
      default: "ROLE"
    }
  },
  // ZSS Claim Service Client Configuration
  claimService: {
    sid: {
      doc: "The claims service name identifier",
      format: String,
      default: "CLAIM"
    }
  },
  // ZSS Me Service Client Configuration
  meService: {
    sid: {
      doc: "The user service name identifier",
      format: String,
      default: "USER"
    }
  }
};
