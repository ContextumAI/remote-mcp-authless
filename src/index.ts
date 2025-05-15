import { ContextumMCPServer } from './contextum-mcp-server';

export class MCPRemoteServer extends ContextumMCPServer {
  constructor() {
    super();
  }

  async init() {
    // Register your MCP tools here
    this.server.tool('echo', async (input: string) => {
      return `Echo: ${input}`;
    });
    
    this.server.tool('time', async () => {
      return new Date().toISOString();
    });
  }
}

export default new MCPRemoteServer().start();
