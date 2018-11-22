// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback4-extension-starter
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import { Provider, inject } from '@loopback/context';
import * as grpc from 'grpc';
import { GrpcBindings } from '../keys';
import { Config } from '../types';

export class ServerProvider implements Provider<grpc.Server> {
  private server: grpc.Server;

  constructor(@inject(GrpcBindings.CONFIG) config: Config.Component) {
    this.server = new grpc.Server(config.options || {});
  }

  public value(): grpc.Server {
    return this.server;
  }
}
