<template>
  <div class="container">
   
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        const obj = {
            a1: 'a1',
            b1: 'b1',
            c1: 'c1',
        }

       console.log(obj.hasOwnProperty('a1'),'普通对象') 

       this.Fun()
       this.ClassFun()
    },
    methods: {
        Fun() {
            function NewFun() {
                this.a1 = 'a1'
                this.a2 = 'a2'
                
            }
            NewFun.prototype.getFun = function() {
                return 'getFun'
            }
            NewFun.prototype.a3 ='a3'

            var fun1 = new NewFun()
            console.log(fun1.hasOwnProperty('a1'), '构造函数属性')
            console.log(fun1.hasOwnProperty('a3'), '构造函数原型属性')
            console.log(fun1.hasOwnProperty('getFun'), '构造函数原型方法')
        },
        ClassFun() {
            class Fun {
                constructor(x, y) {
                    this.x = x;
                    this.y = y
                }
                getFun() {
                    return 'getFun'
                }
            }
            var fun1 = new Fun()
            console.log(fun1.hasOwnProperty('x'), 'class 属性')
            console.log(fun1.hasOwnProperty('getFun'), 'class 方法')
        }
    }
}
</script>

<style>

</style>
