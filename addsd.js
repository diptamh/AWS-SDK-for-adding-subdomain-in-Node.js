var params = {
  ChangeBatch: {
   Changes: [
      {
     Action: "CREATE", 
     ResourceRecordSet: {
      AliasTarget: {
       DNSName: "d111111abcdef8.cloudfront.net ", 
       EvaluateTargetHealth: false, 
       HostedZoneId: "ZM7SVRK5KUCMX"
      }, 
      Name: "sub-domain-check.satnamsandhu.xyz", 
      Type: "A"
     }
    }
   ], 
   Comment: "SUB-DOMAIN added"
  }, 
  HostedZoneId: "ZM7SVRK5KUCMX"// Depends on the type of resource that you want to route traffic to
 };
 route53.changeResourceRecordSets(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    ChangeInfo: {
     Comment: "CloudFront distribution for example.com", 
     Id: "/change/C2682N5HXP0BZ4", 
     Status: "PENDING", 
     SubmittedAt: <Date Representation>
    }
   }
   */
 });
