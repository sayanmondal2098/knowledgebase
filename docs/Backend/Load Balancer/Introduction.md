# Load Balancer Introduction

**Load balancing**  refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a  _server farm_  or  _server pool_.

Modern high‑traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To cost‑effectively scale to meet these high volumes, modern computing best practice generally requires adding more servers.

A  [load balancer](https://www.nginx.com/solutions/adc)  acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

In this manner, a load balancer performs the following functions:

-   Distributes client requests or network load efficiently across multiple servers
-   Ensures high availability and reliability by sending requests only to servers that are online
-   Provides the flexibility to add or subtract servers as demand dictates

![load balancing diagram](https://www.nginx.com/wp-content/uploads/2014/07/what-is-load-balancing-diagram-NGINX-1024x518.png)

load balancing diagram

### Load Balancing Algorithms

Different load balancing algorithms provide different benefits; the choice of load balancing method depends on your needs:

-   **Round Robin** – Requests are distributed across the group of servers sequentially.
-   **Least Connections** – A new request is sent to the server with the fewest current connections to clients. The relative computing capacity of each server is factored into determining which one has the least connections.
-   **Least Time**  – Sends requests to the server selected by a formula that combines the  
    fastest response time and fewest active connections. Exclusive to NGINX Plus.
-   **Hash**  – Distributes requests based on a key you define, such as the client IP address or  
    the request URL. NGINX Plus can optionally apply a consistent hash to minimize redistribution  
    of loads if the set of upstream servers changes.
-   **IP Hash** – The IP address of the client is used to determine which server receives the request.
-   **Random with Two Choices**  – Picks two servers at random and sends the request to the  
    one that is selected by then applying the Least Connections algorithm (or for NGINX Plus  
    the Least Time algorithm, if so configured).

## Benefits of Load Balancing

-   Reduced downtime
-   Scalable
-   Redundancy
-   Flexibility
-   Efficiency

## Related Topics

### Session Persistence

Information about a user’s session is often stored locally in the browser. For example, in a shopping cart application the items in a user’s cart might be stored at the browser level until the user is ready to purchase them. Changing which server receives requests from that client in the middle of the shopping session can cause performance issues or outright transaction failure. In such cases, it is essential that all requests from a client are sent to the same server for the duration of the session. This is known as  _session persistence_.

The best  [load balancers](https://www.nginx.com/solutions/adc/)  can handle session persistence as needed. Another use case for session persistence is when an upstream server stores information requested by a user in its cache to boost performance. Switching servers would cause that information to be fetched for the second time, creating performance inefficiencies.

### Dynamic Configuration of Server Groups

Many fast‑changing applications require new servers to be added or taken down on a constant basis. This is common in environments such as the  [Amazon Web Services](https://www.nginx.com/partners/amazon-web-services/)  (AWS) Elastic Compute Cloud (EC2), which enables users to pay only for the computing capacity they actually use, while at the same time ensuring that capacity scales up in response traffic spikes. In such environments it greatly helps if the load balancer can dynamically add or remove servers from the group without interrupting existing connections.

### Hardware vs. Software Load Balancing

Load balancers typically come in two flavors: hardware‑based and software‑based. Vendors of hardware‑based solutions load proprietary software onto the machine they provide, which often uses specialized processors. To cope with increasing traffic at your website, you have to buy more or bigger machines from the vendor. Software solutions generally run on commodity hardware, making them less expensive and more flexible. You can install the software on the hardware of your choice or in cloud environments like AWS EC2.

### Seven-Layer Open System Interconnection (OSI)

Load balancing can be performed at various layers in the Open Systems Interconnection (OSI) Reference Model for networking.

Layer 7 load balancing is more CPU‑intensive than packet‑based Layer 4 load balancing, but rarely causes degraded performance on a modern server. Layer 7 load balancing enables the load balancer to make smarter load‑balancing decisions, and to apply optimizations and changes to the content.

## What Is Load Balancing and How Does It Work?

Load balancing is the distribution of requests over a network to a pool of shared computing resources. The underlying concept is simple but powerful. Imagine you’re working with a website that needs to serve thousands or even millions of users. Currently, the domain points to the IP address of a single web server. Responding to each request consumes some fraction of the server’s resources. When the server is using all of its resources, it will either take longer to respond to requests or the requests will fail entirely and the user experience will suffer. You can add more RAM, more storage capacity, and, in some cases, additional CPUs, _but_ you can’t scale forever. Enter load balancers.

If our hypothetical website has a load balancer implementation, then the domain name—instead of pointing to a single server—points to the address of the load balancer. Behind the load balancer is a pool of servers, all serving the site content. When a request comes in, the load balancer routes the request to one of the back end servers. In this manner, the load balancer ensures an even distribution of requests to all servers, improving site performance and reliability.

## Types of Load Balancers

Load balancers are generally distinguished by the type of load balancing they perform. They are offered in a hardware form-factor by vendors like F5 and Citrix and as software by open-source and cloud vendors. Software load balancers are applications that can be installed and provisioned on more traditional compute resources like servers. Cloud load balancers, a newer paradigm of software load balancing, are offered by cloud vendors like AWS and its [Elastic Load Balancer (ELB)](https://logz.io/blog/aws-elastic-load-balancing-elb/).

Load balancer types vary according to the [OSI model](https://www.networkworld.com/article/3239677/the-osi-model-explained-how-to-understand-and-remember-the-7-layer-network-model.html) layer at which the load balancer “operates.”

Classic load balancers, also known as “plain old load balancers” (POLB) operate at layer 4 of the OSI. They take client requests, which are composed of TCP or UDP packets, and make decisions that route the requests based on some common algorithms covered later in this article.

Network load balancers also operate at layer 4, but they can scale to handle large amounts of requests and can route traffic using hashing algorithms based on information like port and IP address.

Application load balancers operate at layer 7 of the OSI, making routing decisions based on the actual content of the application traffic, like HTTP headers, queries, and URLs. Choosing what type of load balancer to implement depends heavily on your use case.

## Load Balancing Methods

How does a load balancer “decide” where to send requests? While application load balancers make sophisticated decisions based on application traffic, common algorithms form the backbone of most load balancing implementations. These algorithms include:

-   **Round robin**: The load balancer distributes connection requests to a pool of servers in a repeating loop, regardless of relative load or capacity. Server A, server B, server C, server A, server B, etc.
-   **Weighted round robin**: This is like the standard round robin, except for the fact that certain back end servers can be assigned to a higher priority, receiving disproportionally more traffic/requests. Server A, server A, server B, server C, server A, server A, server B, server C, etc.
-   **Least connections**: This algorithm is fairly self-explanatory; the load balancer sends a new request to the back end server with the least number of active connections.
-   **Weighted least connections**: This algorithm is like least connections, but certain back end servers can be assigned a higher priority, receiving disproportionally more traffic/requests. In a scenario where some back end servers have a larger or more performant resource configuration, you would use WLC to route them a greater share of the traffic.
-   **Random**: Requests are sent to back end servers in a completely random fashion. No considerations are made for load levels, connection count, etc.

Now that you have a basic understanding of load balancing, we’ll evaluate some of the more popular load balancing options as well as some best practices that apply to any load balancer solution.

## The Top 5 Open Source Load Balancers

In this section, we’ll look at some of the most popular open-source load balancers. Github stars may be an oversimplified measure of popularity; however, since they are widely-known, they’ve been included below.

### Traefik

-   27.7k Github stars
-   Application / Layer 7

[Traefik](https://github.com/containous/traefik) bills itself as the “cloud native edge router.” It’s a modern microservices-focused application load balancer and reverse proxy written in Golang. With its emphasis on support for several modern container orchestration platforms, batteries-included logging, and several popular metric formats, Traefik is a top choice for container-based microservices architectures.

### NGINX

-   11.3k Github stars
-   Application / Layer 7

[Nginx](https://github.com/nginx/nginx) is a name that should be instantly recognizable to anyone involved in web application engineering. This tool offers load balancing capabilities via its [ngx_http_upstream_module](http://nginx.org/en/docs/http/ngx_http_upstream_module.html). A well-established, widely supported option, Nginx offers highly scalable performance out of the box and can be extended with additional modules like Lua.

### Seesaw

-   5k Github stars
-   Network / Layer 4

[Seesaw](https://github.com/google/seesaw) is another open-source load balancer written in Golang. It was originally created by Google SREs to provide a robust solution for load balancing internal Google infrastructure traffic. When choosing Seesaw, you’re getting the collective engineering acumen of Google’s powerful SRE cohort in an open-source ecosystem.

### HAProxy

-   1.1k Github stars
-   Network and application / Layers 4 and 7

[HAProxy](https://github.com/haproxy/) is another common name in the web ecosystem. HAProxy offers reverse proxying and load balancing of TCP and HTTP traffic. When you choose HAProxy, you’re choosing a high-performance, well-established solution.

### Neutrino

-   265 Github stars
-   Network and application / Layers 4 and 7

A relatively lesser-known offering, [Neutrino](https://github.com/eBay/Neutrino) is a Scala-based software load balancer originally developed by eBay. Neutrino’s strength lies in the broad compatibility of its runtime environment, the JVM.

## Choosing the Right Type of Load Balancer

Choosing a load balancer solution depends heavily upon your use case.

If you’re running a containerized, microservices-based architecture, a layer 7 application load balancer is probably your best choice.

Need to route millions of requests to your back-end servers in a performant manner? A network load balancer is the way to go.

And, if you’re a small, nimble development team that just needs to get your application to as many users as possible with as little configuration as possible, a cloud provider like AWS provides you with tight integration and a batteries-included solution, the Elastic Load Balancer.

## Choosing the Right Scheduling Algorithm

Choosing the right scheduling algorithm depends on a pragmatic evaluation of the kind of traffic you expect for your application:

IF client requests are small and result in short-lived sessions, THEN a round robin algorithm is probably fine.

IF Longer-lived, more stateful sessions need to be more carefully managed with regards to back end resources, THEN least connections would be the most appropriate choice for this kind of case.