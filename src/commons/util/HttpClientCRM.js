import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-dependency-injection';

@inject(HttpClient)
export class HttpClientCRM{
  constructor(http){
    this.http = http;

    this.baseUrl = 'http://localhost:8443/api/entities';

    this.http.configure(config => {
      config.withBaseUrl(this.baseUrl);
      config.withInterceptor({
        request(request) {
          request.headers.add("Authorization", "Basic " + btoa(username + ":" + password));
          ea.publish('http-request', request);
          return request;
        }
      })
    });

  }
}
