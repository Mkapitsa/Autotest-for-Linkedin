var casper = require('casper').create ({
	logLevel:"info",
	//Initiate
	verbose: true,
	onDie: function(){
		consol.log("likedin Page Logged In");
	},
	onPageInitialized: function(){
		consol.log('PageInitialized');
	}
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
casper.viewport = {width: 1366, height: 768};
var x = require('casper').selectXPath;
 
casper.start('https://www.linkedin.com', function(){
	this.sendKeys("#login-email","mkapitsa7@gmail.com");
	this.sendKeys("#login-password","dessclub147");
	casper.capture("test1.png");
});

casper.thenClick(x('//input[@type="submit"]'), function(){
	casper.wait(5000,function(){
	casper.capture("test2.png");
	});
});

casper.thenClick(x('//span[@class="connect medium"]'), function(){	
	casper.wait(5000,function(){
	casper.capture("test3.png");
	}); 
});	

casper.thenClick(x('//button[@class="bt-request-buffed buffed-blue-bkg-1"]'), function(){	
	casper.wait(5000,function(){
	casper.capture("test4.png");
	}); 
});	

	
casper.run()
		
