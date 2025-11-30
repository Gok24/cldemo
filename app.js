selectedMS =""
selectedDp=""
selectedsrcinc=[]
selecteddec=[]

lay1 = document.querySelector(".lay1")
lay2 = document.querySelector(".lay2")
lay3 = document.querySelector(".lay3")
lay4 = document.querySelector(".lay4")
xpecon = document.querySelector(".xpecon")

l1allop= lay1.querySelectorAll(".op")
l2allop = lay2.querySelectorAll(".op")
l3allop= lay3.querySelectorAll(".opg")
l4allop = lay4.querySelectorAll(".opg")

l1bc = lay1.querySelector(".l1bc")
l2bc = lay2.querySelector(".l2bc")
l3bc = lay3.querySelector(".l3bc")
l4bc = lay4.querySelector(".l4bc")
l5bc = xpecon.querySelector(".l5bc")



l1op1 = lay1.querySelector(".opa")
contl1 = lay1.querySelector(".contl1")
contl2 = lay2.querySelector(".contl2")
contl3 = lay3.querySelector(".contl3")
contl4 = lay4.querySelector(".contl4")

l2bc.onclick = function(){
        lay2.style.display="none"
        lay1.style.display="flex"
}
l3bc.onclick = function(){
    lay3.style.display="none"
    lay2.style.display="flex"
}
l4bc.onclick = function(){
    lay4.style.display="none"
    lay3.style.display="flex"
}
l5bc.onclick = function(){
    xpecon.style.display="none"
    document.querySelector(".xholder").style.display="none"
    document.querySelector(".xholder").innerHTML=""
    lay4.style.display="flex"
}



l1allop.forEach(op => {
    op.addEventListener("click", function () {
        // Remove class from all
        l1allop.forEach(item => {
            item.classList.remove("xvis");

            const img = item.querySelector("img");
            img.src = item.dataset.imgDefault;   // revert to default
        });

        // Activate the clicked one
        this.classList.add("xvis");

        const img = this.querySelector("img");
        img.src = this.dataset.imgSelected;  // change to selected img

        // Your existing selection logic
        selectedMS = this.dataset.x;
    });
});
l2allop.forEach(op => {
    op.addEventListener("click", function () {
        // Remove class from all
        l2allop.forEach(item => {
            item.classList.remove("xvis");

            const img = item.querySelector("img");
            img.src = item.dataset.imgDefault;   // revert to default
        });

        // Activate the clicked one
        this.classList.add("xvis");

        const img = this.querySelector("img");
        img.src = this.dataset.imgSelected;  // change to selected img

        // Your existing selection logic
        selectedDp = this.dataset.x;
    });
});

  // store selected values here

l3allop.forEach(op => {

    op.addEventListener("click", function () {

        const value = this.dataset.x;
        const isNone = value === "none";
        const img = this.querySelector("img");

        // =============== WHEN USER CLICKS "NONE" ===============
        if (isNone) {

            // Clear all visual selections
            l3allop.forEach(item => {
                item.classList.remove("xvis");
                item.querySelector("img").src = item.dataset.imgDefault;
            });

            // Select ONLY "none"
            this.classList.add("xvis");
            img.src = this.dataset.imgSelected;

            // Update array
            selectedsrcinc = ["none"];

            return;
        }

        // =============== IF CLICKING A NORMAL ITEM ===============

        // If NONE was selected earlier → unselect it AND remove from array
        if (selectedsrcinc.includes("none")) {
            selectedsrcinc = selectedsrcinc.filter(v => v !== "none");

            const noneItem = [...l3allop].find(i => i.dataset.x === "none");
            if (noneItem) {
                noneItem.classList.remove("xvis");
                noneItem.querySelector("img").src = noneItem.dataset.imgDefault;
            }
        }

        // TOGGLE NORMAL ITEM
        if (this.classList.contains("xvis")) {
            // Unselect
            this.classList.remove("xvis");
            img.src = this.dataset.imgDefault;

            selectedsrcinc = selectedsrcinc.filter(v => v !== value);
        } else {
            // Select
            this.classList.add("xvis");
            img.src = this.dataset.imgSelected;

            selectedsrcinc.push(value);
        }

        // Remove any accidental duplicates
        selectedsrcinc = [...new Set(selectedsrcinc)];
    });
});


l4allop.forEach(op => {

    op.addEventListener("click", function () {

        const value = this.dataset.x;
        const isNone = value === "none";
        const img = this.querySelector("img");

        // =============== WHEN USER CLICKS "NONE" ===============
        if (isNone) {

            // Clear all visual selections
            l4allop.forEach(item => {
                item.classList.remove("xvis");
                item.querySelector("img").src = item.dataset.imgDefault;
            });

            // Select ONLY "none"
            this.classList.add("xvis");
            img.src = this.dataset.imgSelected;

            // Update array
            selecteddec = ["none"];

            return;
        }

        // =============== IF CLICKING A NORMAL ITEM ===============

        // If NONE was selected earlier → unselect it AND remove from array
        if (selecteddec.includes("none")) {
            selecteddec = selecteddec.filter(v => v !== "none");

            const noneItem = [...l4allop].find(i => i.dataset.x === "none");
            if (noneItem) {
                noneItem.classList.remove("xvis");
                noneItem.querySelector("img").src = noneItem.dataset.imgDefault;
            }
        }

        // TOGGLE NORMAL ITEM
        if (this.classList.contains("xvis")) {
            // Unselect
            this.classList.remove("xvis");
            img.src = this.dataset.imgDefault;

            selecteddec = selecteddec.filter(v => v !== value);
        } else {
            // Select
            this.classList.add("xvis");
            img.src = this.dataset.imgSelected;

            selecteddec.push(value);
        }

        // Remove any accidental duplicates
        selecteddec = [...new Set(selecteddec)];
    });
});



contl1.onclick = function(){
    if(selectedMS==""){
        alert("please select an option")
    }
    else{
        // console.log(selectedMS)
        lay1.style.display="none"
        lay2.style.display="flex"
    }
}
contl2.onclick = function(){
    if(selectedDp==""){
        alert("please select an option")
    }
    else{
        // console.log(selectedDp)
        lay2.style.display="none"
        lay3.style.display="flex"
    }
}
contl3.onclick = function(){
    if(selectedsrcinc==""){
        alert("please select an option")
    }
    else{
        // console.log(selectedsrcinc)
        lay3.style.display="none"
        lay4.style.display="flex"
    }
}
xpecon = document.querySelector(".xpecon")
contl4.onclick = function(){
    if(selecteddec==""){
        alert("please select an option")
    }
    else{
        // console.log("Marital status: ",selectedMS)
        // console.log("Have dependents: ",selectedDp)
        // console.log("sources of income :", selectedsrcinc)
        // console.log("deductions :",selecteddec)

        constructdynamiclist(selectedMS,selectedDp,selectedsrcinc,selecteddec)
        lay4.style.display="none"
        document.querySelector(".xholder").style.display="block"
        xpecon.style.display="flex"
    }
}

xholder = document.querySelector(".xholder")
function constructdynamiclist(selectedMS, selectedDp, selectedsrcinc, selecteddec) {

    // Append pi
    xholder.insertAdjacentHTML("beforeend", pi);

    // Append di only if selectedDp == "Yes"
    if (selectedDp === "Yes") {
        xholder.insertAdjacentHTML("beforeend", di);
    }

    /* =======================
       1. INCOME SECTION
       ======================= */

    if (!(selectedsrcinc.length === 1 && selectedsrcinc[0].toLowerCase() === "none")) {

        const listContainer = document.createElement("div");
        listContainer.classList.add("listContainer");

        listContainer.innerHTML = `
            <div class="textMedium">
                <p>Sources of Income</p>
            </div>
            <div class="textSmall">
                <p>Many of these forms won’t be needed to file taxes every year. 
                For example, you will only receive the investment forms you may 
                need to file your taxes if you had distributions or other activity.</p>
            </div>
        `;

        const templates={

            emp : `<div class="subTxt">
                            <p>Employed</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Forms W-2</div>
                        </div>`,
            unemp : `            <div class="subTxt">
                            <p>Unemployed</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Unemployment (1099-G)</div>
                        </div>`,
            selfemp : `<div class="subTxt">
                            <p>Self-Employed</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Forms 1099, Schedules K-1, income records to verify amounts not reported on 1099-MISC or 1099-NEC</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records of all expenses — check registers or credit card statements, and receipts</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Business-use asset information (cost, date placed in service, etc.) for depreciation</div>
                        </div>
            
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Office in home information, if applicable</div>
                        </div>
            
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Record of estimated tax payments made (Form 1040–ES)</div>
                        </div>`,
            rentinc : `            <div class="subTxt">
                            <p>Rental Income</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records of income and expenses</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Rental asset information (cost, date placed in service, etc.) for depreciation</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Record of estimated tax payments made (Form 1040–ES)</div>
                        </div>`,
            retirinc : ` <div class="subTxt">
                            <p>Retirement Income</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Pension/IRA/annuity income (1099-R)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Traditional IRA basis (i.e., amounts you contributed to the IRA that were already taxed)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Social security/RRB-1099</div>
                        </div>`,
            savinc : `<div class="subTxt">
                            <p>Savings & Investments or Dividends</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Interest, dividend income (1099-INT, 1099-OID, 1099-DIV)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Income from sales of stock or other property (1099-B, 1099-S)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Dates of acquisition and records of your cost or other basis in property you sold (if basis is not reported on 1099-B)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Health Savings Account and long-term care reimbursements (1099-SA or 1099-LTC)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Expenses related to your investments</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Record of estimated tax payments made (Form 1040–ES)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Transactions involving digital assets like cryptocurrency or NFTs (1099-DA)</div>
                        </div>`,
            
            othinc : `<div class="subTxt">
                            <p>Other Income & Losses</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Payment Card and Third Party Network Transactions - 1099-K</div>
                        </div>
            
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Gambling income (W-2G or records showing income, as well as expense records)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Jury duty records</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Hobby income and expenses</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Prizes and awards</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Trust income</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Royalty Income 1099–MISC</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Any other 1099s received</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Record of alimony paid/received with ex-spouse’s name and SSN</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">State tax refund</div>
                        </div>`
            
                    };

        selectedsrcinc.forEach(item => {
            if (templates[item]) {
                listContainer.insertAdjacentHTML("beforeend", templates[item]);
            }
        });

        xholder.appendChild(listContainer);
    }


    /* =======================
       2. DEDUCTION SECTION
       ======================= */

    // selecteddec uses template map: dtemp
    if (!(selecteddec.length === 1 && selecteddec[0].toLowerCase() === "none")) {

        const decContainer = document.createElement("div");
        decContainer.classList.add("listContainer");

        decContainer.innerHTML = `
            <div class="textMedium">
                <p>Sources of Deductions</p>
            </div>
            <div class="textSmall">
                <p>These are deductions that may apply to you based on
                   your personal and financial situation.</p>
            </div>
        `;
        dtemp={

            hvo : `            <div class="subTxt">
                            <p>Home and Vehicle Ownership</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Forms 1098 or other mortgage interest statements</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Real estate and personal property tax records</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Receipts for energy-saving home improvements (e.g., solar panels, solar water heater)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Electric vehicle information</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">All other 1098 series forms</div>
                        </div>`,
            
            chado : `<div class="subTxt">
                            <p>Charitable Donations</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Cash amounts donated to houses of worship, schools, other charitable organizations</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records of non-cash charitable donations</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Amounts of miles driven for charitable or medical purposes</div>
                        </div>`,
            
            me : `<div class="subTxt">
                            <p>Medical Expenses</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Amounts paid for healthcare, insurance, and to doctors, dentists, and hospitals</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Amounts paid for qualified insurance premiums if paid outside of the Marketplace or an employer provided plan</div>
                        </div>`,
            
            hi:`<div class="subTxt">
                            <p>Health Insurance</p>
                        </div>
                        <div class="liItem">
                           <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Form 1095-A if you enrolled in an insurance plan through the Marketplace (Exchange)</div>
                        </div>`,
            ce:`<div class="subTxt">
                            <p>Childcare Expenses</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Fees paid to a licensed day care center or family day care for care of an infant or preschooler</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Amounts paid to a baby-sitter or provider care of your child under age 13 while you work</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Expenses paid through a dependent care flexible spending account at work</div>
                        </div>`,
            ee : `<div class="subTxt">
                            <p>Educational Expenses</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Forms 1098-T from educational institutions</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Receipts that itemize qualified educational expenses</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records of any scholarships or fellowships you received</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Form 1098-E if you paid student loan interest</div>
                        </div>`,
                    k12:`<div class="subTxt">
                            <p>K-12 Educator Expenses</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Receipts for classroom expenses (for educators in grades K-12)</div>
                        </div>`,
            slt : `<div class="subTxt">
                            <p>State and Local Taxes</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Amount of state and local income or sales tax paid (other than wage withholding)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Invoice showing amount of vehicle sales tax paid and / or personal property tax on vehicles</div>
                        </div>`,
            
            ros : `<div class="subTxt">
                            <p>Retirement & Other Savings</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Form 5498-SA showing HSA contributions</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Form 5498 showing IRA contributions</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">All other 5498 series forms (5498-QA, 5498-ESA)</div>
                        </div>`,
            fdd : `<div class="subTxt">
                            <p>Federally Declared Disaster</p>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">City/county you lived/worked/had property in</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records to support property losses (appraisal, clean-up costs, etc.)</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Records of rebuilding/repair costs</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Insurance reimbursements/claims to be paid</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">FEMA assistance information</div>
                        </div>
                        <div class="liItem">
                            <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                            <div class="textSmall">Check the FEMA website to see if your county has been declared a federal disaster area</div>
                        </div>`
                    }

        selecteddec.forEach(item => {
            if (dtemp[item]) {
                decContainer.insertAdjacentHTML("beforeend", dtemp[item]);
            }
        });

        xholder.appendChild(decContainer);
    }
}


cross= document.querySelectorAll(".cross")
cross.forEach(c=>{
    c.onclick = function(){
        // document.querySelector(".overlay").style.display="none"
        location.reload();
    }
})

cyc = document.querySelector(".cyc")
cyc.onclick = function(){
    document.querySelector(".overlay").style.display="block"
}

/* templating */


xptj = `<div class="xpe textJumbo">
            <p>Tax documents checklist: What do you need to file taxes?</p>
        </div>`

xpts =`<div class="xpe xss textSmall">
            <p>The documents you need for tax prep depend on your situation. To help you prepare for your tax appointment or for filing your own taxes, we've created a checklist to help you know what forms to bring.</p>
        </div>`


 pi = `<div class="xpe listContainer">
            <div class="textMedium">
                <p>Personal Information</p>
            </div>
            <div class="textSmall">
                <p>Tax Identification Numbers are mandatory items on your checklist. All taxpayers will need the following to do their taxes.</p>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Your social security number or tax ID number</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Your spouse’s full name, social security number or tax ID number, and date of birth</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Identity Protection PIN, if one has been issued to you, your spouse, or your dependent by the IRS</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Routing and account numbers to receive your refund by direct deposit or pay your balance due if you choose</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Foreign reporting and residency information - if applicable</div>
            </div>

        </div>`

di = `<div class="listContainer">
            <div class="textMedium">
                <p>Dependent(s) Information</p>
            </div>
            <div class="textSmall">
                <p>Parents and caregivers should gather this information as they review what they need to file their taxes.</p>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Dates of birth and social security numbers or tax ID numbers</div>
            </div>
            <div class="liItem">
               <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Childcare records (including the provider's tax ID number) if applicable</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Income of dependents and of other adults in your home</div>
            </div>
            <div class="liItem">
                <div class="liIcon lix"><span>&nbsp;&nbsp;&nbsp;</span></div>
                <div class="textSmall">Form 8332 showing that the child’s custodial parent is releasing their right to claim a child to you, the noncustodial parent (if applicable)</div>
            </div>

        </div>`

        

        function printDiv(divId) {
            var divContent = document.getElementById(divId).innerHTML;  // Get content of the printableDiv
        
            // Create a new window to print the content
            var printWindow = window.open('', '', 'height=600,width=800');
        
            // Write the basic structure of the print page (HTML)
            printWindow.document.write('<html><head><title>Checklist</title>');
        
            // Copy over the link tags for external stylesheets (e.g., app.css)
            var linkTags = document.querySelectorAll('link[rel="stylesheet"]');
            linkTags.forEach(function(link) {
                printWindow.document.write('<link rel="stylesheet" href="' + link.href + '">');
            });
        
            // Add any inline <style> tags
            var styleTags = document.querySelectorAll('style');
            styleTags.forEach(function(style) {
                printWindow.document.write('<style>' + style.innerHTML + '</style>');
            });
        
            // Optionally, ensure Google Fonts are included (like Material Icons)
            var fontLink = document.querySelector('link[href^="https://fonts.googleapis.com"]');
            if (fontLink) {
                printWindow.document.write('<link href="' + fontLink.href + '" rel="stylesheet">');
            }
        
            printWindow.document.write('</head><body>');
            printWindow.document.write(divContent);  // Insert the content of the printableDiv
            printWindow.document.write('</body></html>');
        
            // Ensure the document is completely loaded before triggering print
            printWindow.document.close();  // Close the document stream to finalize the content
            printWindow.onload = function() {
                printWindow.print();  // Trigger the print dialog after the content is fully loaded
            };
        }
        
