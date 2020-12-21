<template>
  <div>
    <div>查看控制台</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hebing: [],
      double: null,
      pow: null,
      reverseInt: null
    };
  },
  mounted() {
    // 只在客户端用
    this.hebingSet();
    this.jiaojiSet();
    this.proxyEs6();
  },
  methods: {
    hebingSet() {
      const arr = [1, 2, 3];
      const brr = [4, 5, 6];
      const hebing = new Set([...arr, ...brr]);
      console.log(hebing, "合并Set");
    },
    jiaojiSet() {
      let a = new Set([1, 2, 3]);
      let b = new Set([4, 3, 2]);
      const hebing = new Set([...a].filter(x => b.has(x)));
      console.log(hebing, "交集Set");
    },
    proxyEs6() {
      const proxy = new Proxy(
        {
            c: 2
        },
        {
          get: function(params1, params2) {
            console.log(params1, params2, 'get params')
            // params1 {c:2} 
            // params2 a
            return 12;
          },
          customValue: 13
        }
      );
      console.log(proxy.a);

        // 链式
        var that = this
      var pipe = function(value) {
        var funcStack = [];
        var oproxy = new Proxy(
          {},
          {
            get: function(pipeObject, fnName) {
                if (fnName === "get") {
                    return funcStack.reduce(function(val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(that[fnName]);
                return oproxy;
            }
          }
        );

        return oproxy;
      };

      this.double = n => n * 2;
      this.pow = n => n * n;
      this.reverseInt = n =>
        n
          .toString()
          .split("")
          .reverse()
          .join("") | 0;
      pipe(3).double.pow.reverseInt.get; // 63
    }
  }
};
</script>
<style lang="scss" scoped></style>
