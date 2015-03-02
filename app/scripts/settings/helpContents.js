'use strict';

angular.module('deckApp.help')
  .constant('helpContents', {
    'aws.associateElasticIp.elasticIp': '<p>(Optional) <b>Elastic IP</b> is an IP address that Spinnaker will associate with this cluster.' +
      '<p>If specified, this elastic IP must exist and not already be attached to an instance or cluster.</p>' +
      '<p>If left blank, Spinnaker will make a selection from the list of available elastic IPs in the provided account and region.</p>',
    'aws.associateElasticIp.type': '<p><b>Type</b> of elastic IP to associate:' +
      '<ul>' +
      '<li><b>standard</b> is usable in EC2 Classic</li>' +
      '<li><b>vpc</b> is usable in VPC</li>' +
      '</ul>',
    'aws.serverGroup.subnet': 'The subnet selection determines the VPC in which your server group will run. Options vary by account and region; the most common ones are:' +
      '<ul>' +
      '<li><b>None (EC2 Classic)</b>: instances will not run in a VPC</li>' +
      '<li><b>internal</b> instances will be restricted to internal clients (i.e. require VPN access)</li>' +
      '<li><b>external</b> instances will be publicly accessible and running in VPC</li>' +
      '</ul>',
    'aws.loadBalancer.subnet': 'The subnet selection determines the VPC in which your load balancer will run.<br/>' +
      ' This also restricts the server groups which can be serviced by the load balancer.' +
      ' Options vary by account and region; the most common ones are:' +
      '<ul>' +
      '<li><b>None (EC2 Classic)</b>: the load balancer will not run in a VPC</li>' +
      '<li><b>internal</b> access to the load balancer will be restricted to internal clients (i.e. require VPN access)</li>' +
      '<li><b>external</b> the load balancer will be publicly accessible and running in VPC</li>' +
      '</ul>',
    'aws.loadBalancer.detail': '<p>(Optional) <b>Detail</b> is a string of free-form alphanumeric characters; by convention, we recommend using "frontend".</p><p>' +
      'However, if your stack name needs to be longer (load balancer names are limited to 32 characters), consider changing it to "elb", or omit it altogether.</p>',
    'aws.loadBalancer.stack': '(Optional) <b>Stack</b> is one of the core naming components of a cluster, used to create vertical stacks of dependent services for integration testing.',
    'aws.serverGroup.stack': '(Optional) <b>Stack</b> is one of the core naming components of a cluster, used to create vertical stacks of dependent services for integration testing.',
    'aws.serverGroup.detail': '(Optional) <b>Detail</b> is a string of free-form alphanumeric characters and hyphens to describe any other variables',
    'aws.serverGroup.imageName': '(Required) <b>Image</b> is the deployable Amazon Machine Image. Images are restricted to the account and region selected.',
    'aws.serverGroup.allImages': 'Search for an image that does not match the name of your application.',
    'aws.serverGroup.filterImages': 'Select from a pre-filtered list of images matching the name of your application.',
    'aws.serverGroup.strategy': 'The deployment strategy tells Spinnaker what to do with the previous version of the server group.',
    'aws.securityGroup.vpc': '<p>The VPC to which this security group will apply.</p>' +
      '<p>If you wish to use VPC but are unsure which VPC to use, the most common one is "Main".</p>' +
      '<p>If you do not wish to use VPC, select "None".</p>',
    'cluster.search': 'Quickly filter the displayed server groups by the following fields:' +
      '<ul>' +
      '<li>Region</li>' +
      '<li>Account</li>' +
      '<li>Server Group Name</li>' +
      '<li>Load Balancer Name</li>' +
      '<li>Instance ID</li>' +
      '</ul>' +
      '<p>You can search for multiple words or word fragments. For instance, to find all server groups in a prod stack with "canary" in the details' +
      ', enter "prod canary".</p>' +
      '<p>To find a particular instance, enter the instance ID. Only the containing server group will be displayed, and the instance ' +
      'will be highlighted for you.</p>',
    'gce.loadBalancer.advancedSettings.healthInterval': '<p>Configures the interval, in seconds, between load balancer health checks.</p><p>Default: <b>10</b></p>',
    'gce.loadBalancer.advancedSettings.healthyThreshold': '<p>Configures the number of healthy observations before reinstituting an instance into the load balancer’s traffic rotation.</p><p>Default: <b>10</b></p>',
    'gce.loadBalancer.advancedSettings.unhealthyThreshold': '<p>Configures the number of unhealthy observations before deservicing an instance from the load balancer.</p><p>Default: <b>2</b></p>',
    'gce.loadBalancer.healthCheck': '(Optional) <b>Health Checks</b> use HTTP requests to determine if a VM instance is healthy.',
    'gce.loadBalancer.portRange': '(Optional) Only packets addressed to ports in the specified <b>Port Range</b> will be forwarded. If left empty, all ports are forwarded. Must be a single port number or two port numbers separated by a dash. Each port number must be between 1 and 65535, inclusive. For example: 5000-5999.',
    'pipeline.config.deploy.template': '<p>Select an existing cluster to use as a template for this deployment, and we\'ll pre-fill ' +
      'the configuration based on the newest server group in the cluster.</p>' +
      '<p>If you want to start from scratch, select "None".</p>' +
      '<p>You can always edit the cluster configuration after you\'ve created it.</p>',

    'loadBalancer.advancedSettings.healthTimeout': '<p>Configures the timeout, in seconds, for reaching the healthCheck target.</p><p> Default: <b>5</b></p>',
    'loadBalancer.advancedSettings.healthInterval': '<p>Configures the interval, in seconds, between ELB health checks.</p><p>Default: <b>10</b></p>',
    'loadBalancer.advancedSettings.healthyThreshold': '<p>Configures the number of healthy observations before reinstituting an instance into the ELB’s traffic rotation.</p><p>Default: <b>10</b></p>',
    'loadBalancer.advancedSettings.unhealthyThreshold': '<p>Configures the number of unhealthy observations before deservicing an instance from the ELB.</p><p>Default: <b>2</b></p>',
    'pipeline.config.resizeAsg.cluster': '<p>Configures the cluster upon which this resize operation will act. The <em>target</em> specifies what ASG to resolve for the operation.</p>',
    'pipeline.config.modifyScalingProcess.cluster': '<p>Configures the cluster upon which this resize operation will act. The <em>target</em> specifies what ASG to resolve for the operation.</p>',
    'pipeline.config.enableAsg.cluster': '<p>Configures the cluster upon which this resize operation will act. The <em>target</em> specifies what ASG to resolve for the operation.</p>',
    'pipeline.config.disableAsg.cluster': '<p>Configures the cluster upon which this resize operation will act. The <em>target</em> specifies what ASG to resolve for the operation.</p>',

    'serverGroup.description': '<p>A server group is a collection of instances managed together. </p>' +
      '<ul>' +
      '<li>For <b>AWS</b>, a server group is an <b>Auto Scaling Group</b>.</li>' +
      '<li>For <b>GCE</b>, a server group is an <b>Instance Group</b>.</li>' +
      '</ul>',


  });
