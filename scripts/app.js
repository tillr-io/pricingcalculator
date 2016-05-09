(function () {
				
    'use strict';
    
    var pricingCalculator = {
        controllerAs: 'calc',
        controller: function () {
            
            this.onTextClick = function ($event) {
                console.log('clicked');
                $event.target.select();
            };
            
            /* E3 */ this.number_of_users = 0;
            /* G3 */ this.package = 0;
            
            /* E6 */ this.ratecard_monthly = this.number_of_users * this.package;
            /* G6 */ this.ratecard_yearly = this.ratecard_monthly * 12;
            
            /* C9 */ this.twentyfourmonth_discount = 0;
            /* E9 */ this.twentyfourmonth_discount_spm = (this.twentyfourmonth_discount / 100) * this.ratecard_monthly;
            /* G9 */ this.twentyfourmonth_discount_spy = ((this.twentyfourmonth_discount / 100) * this.ratecard_monthly) * 12;
            
            /* C10 */ this.threereferrals_discount = 0;
            /* E10 */ this.threereferrals_discount_spm = (this.threereferrals_discount / 100) * this.ratecard_monthly;
            /* G10 */ this.threereferrals_discount_spy = ((this.threereferrals_discount / 100) * this.ratecard_monthly) * 12;
            
            /* C11 */ this.cofounder_discount = 0;
            /* E11 */ this.cofounder_discount_spm = (this.cofounder_discount / 100) * this.ratecard_monthly;
            /* G11 */ this.cofounder_discount_spy = ((this.cofounder_discount / 100) * this.ratecard_monthly) * 12;
            
            /* C11 */ this.freemonths = 0;
            /* G12 */ this.freemonths_spy = this.ratecard_monthly * this.freemonths;
            
            /* C14 */ this.totalsavings = 0;
            /* E14 */ this.totalsavings_spm = this.twentyfourmonth_discount_spm + this.threereferrals_discount_spm + this.cofounder_discount_spm;
            /* G14 */ this.totalsavings_spy = this.twentyfourmonth_discount_spy + this.threereferrals_discount_spy + this.cofounder_discount_spy + this.freemonths_spy;
            
            /* E17 */ this.discounted_price_nmr = this.ratecard_monthly - this.totalsavings_spm;
            /* G17 */ this.discounted_price_nyr = this.ratecard_yearly - this.totalsavings_spy;
            
            this.update = function () {
                /* E6 */ this.ratecard_monthly = this.number_of_users * this.package;
                /* G6 */ this.ratecard_yearly = this.ratecard_monthly * 12;
                
                /* E9 */ this.twentyfourmonth_discount_spm = (this.twentyfourmonth_discount / 100) * this.ratecard_monthly;
                /* G9 */ this.twentyfourmonth_discount_spy = ((this.twentyfourmonth_discount / 100) * this.ratecard_monthly) * 12;
                
                /* E10 */ this.threereferrals_discount_spm = (this.threereferrals_discount / 100) * this.ratecard_monthly;
                /* G10 */ this.threereferrals_discount_spy = ((this.threereferrals_discount / 100) * this.ratecard_monthly) * 12;
                
                /* E11 */ this.cofounder_discount_spm = (this.cofounder_discount / 100) * this.ratecard_monthly;
                /* G11 */ this.cofounder_discount_spy = ((this.cofounder_discount / 100) * this.ratecard_monthly) * 12;
                
                /* G12 */ this.freemonths_spy = this.ratecard_monthly * this.freemonths;
                
                /* E14 */ this.totalsavings_spm = this.twentyfourmonth_discount_spm + this.threereferrals_discount_spm + this.cofounder_discount_spm;
                /* G14 */ this.totalsavings_spy = this.twentyfourmonth_discount_spy + this.threereferrals_discount_spy + this.cofounder_discount_spy + this.freemonths_spy;
                
                /* E17 */ this.discounted_price_nmr = this.ratecard_monthly - this.totalsavings_spm;
                /* G17 */ this.discounted_price_nyr = this.ratecard_yearly - this.totalsavings_spy;
            }
            
        },
        templateUrl: 'calculator.html'	
    };

    angular
        .module('pc', ['ng-currency'])
        .component('pricingCalculator', pricingCalculator);
        
})();